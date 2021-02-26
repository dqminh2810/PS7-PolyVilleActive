const { CinemaService } = require('../emplacement/cinemas/CinemaService');
const cinemaService = new CinemaService();
const { RestaurantService } = require('../emplacement/restaurants/RestaurantService');
const restaurantService = new RestaurantService();
const { EventService } = require('../activity/events/EventService');
const eventService = new EventService();
const { LibraryService } = require('../emplacement/library/LibraryService');
const libraryService = new LibraryService();
const { SportCenterService } = require('../emplacement/sportCenter/SportCenterService');
const sportCenterService = new SportCenterService();
const { User } = require('../../models/people/user.model');
const { CityService } = require('../location/city/CityService');
const cityService = new CityService();
const { DateService } = require('../DateService');
const dateService = new DateService();
const {OpenRouteService} = require('../route/OpenRouteService');
const openRouteService =  new OpenRouteService();
const https = require('https');
var req = require('request');


const user = false;

function getFulfillmentResponseFormat(defaultRes, textRes) {
  if(textRes === undefined){
    textRes = defaultRes;
  }
  return {
    fulfillmentText: defaultRes,
    fulfillmentMessages: [
      {
        text: {
          text: [
            textRes,
          ],
        },
      },
    ],
  };
}

const nameToService = {
  cinéma: cinemaService,
  restaurant: restaurantService,
  évènement: eventService,
  librairie: libraryService,
  sport_center: sportCenterService,
  ville: cityService
};

function getResponse(request) {
  const parameters = request.queryResult.parameters;

  const intentMapping = {
    test: () => new Promise((resolve, reject) => resolve(getFulfillmentResponseFormat('Test reçu.', 'Test reçu.'))),
    get_access: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'wheelchair'),
    get_schedule: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'opening_hour'),
    get_telephone: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'phone'),
    get_website: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'website'),
    get_adresse: () => findAdress(nameToService[parameters.given_type.toLowerCase()], parameters.given_name),
    get_restaurant_delivery: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'delivery'),
    proximity_geo: () => getProximity(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, nameToService[parameters.request_type.toLowerCase()]),
    get_restaurant_cuisine_type: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'type_cuisine'),
    get_restaurant_type: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'type_restaurant'),
    get_restaurant_takeaway: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'takeaway'),
    get_cinema_screens: () => makeSentenceAttributPresence(cinemaService, parameters.given_name, 'nb_screen'),
    get_cinema_capacity: () => makeSentenceAttributPresence(cinemaService, parameters.given_name, 'capacity'),
    get_event_date: () => eventOnDate(parameters.given_date),
    get_city_department:() => makeSentenceAttributPresence(cityService, parameters.given_name, 'department'),
    get_next_event_city: () => nextEvent(parameters.given_name, parameters.number),
    contexte_nearby: () => getProximity(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, nameToService[parameters.request_type.toLowerCase()]),
    add_event: () => addEvent(parameters),
    time_beetween: () => timeBeetween(parameters),
    contexte_restaurant_delivery: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'delivery'),
    contexte_restaurant_takeaway: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'takeaway'),
    contexte_adresse: () => findAdress(nameToService[parameters.given_type.toLowerCase()], parameters.given_name),
    contexte_access: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'wheelchair'),
    contexte_schedule: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'opening_hour'),
    contexte_telephone: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'phone'),
    contexte_restaurant_type: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'type_restaurant'),
    contexte_cuisine_type: () => makeSentenceAttributPresence(restaurantService, parameters.given_name, 'type_cuisine'),
    contexte_website: () => makeSentenceAttributPresence(nameToService[parameters.given_type.toLowerCase()], parameters.given_name, 'website'),
    contexte_cinema_screens: () => makeSentenceAttributPresence(cinemaService, parameters.given_name, 'nb_screen'),
    contexte_cinema_capacity: () => makeSentenceAttributPresence(cinemaService, parameters.given_name, 'capacity'),


  };

  if (intentMapping[request.queryResult.intent.displayName]) {
    return intentMapping[request.queryResult.intent.displayName]();
  }
  return getFulfillmentResponseFormat("Nous ne savons pas encore faire cela.");
}

function makeSentenceAttributPresence(service, nameObject, attribute) {
  const serviceTraduction = {
    CinemaService: 'cinéma',
    EventService: 'évènement',
    RestaurantService: 'restaurant',
    LibraryService: 'librairie',
    SportCenterService: 'salle de sport',
    CityService: 'ville',
  };

  return service.findByName(nameObject).then(obj => {
    const name = (service.constructor.name === "EventService")?(obj.title):(obj.name);
    return service.getAttribut(nameObject, attribute).then((result) => {
      const attributeSentence = {
        opening_hour: `Le ${serviceTraduction[service.constructor.name]} ${name} ouvre ${result}`,
        phone: `Le numéro de téléphone du ${serviceTraduction[service.constructor.name]} est le ${result}`,
        wheelchair: `Le ${serviceTraduction[service.constructor.name]} ${(result === 'yes' || result === 'oui') ? 'possède un ' : "ne possède pas d'"}accès handicapée.`,
        website: `Le site web du ${name} est le ${result}`,
        address: `Le ${serviceTraduction[service.constructor.name]} est situé à ${result}`,
        delivery: `Le restaurant ${(result === 'yes') ? 'propose ' : 'ne propose pas '}de livraisons.`,
        type_cuisine: `Le restaurant ${name} propose de la cuisine de type ${result}`,
        type_restaurant: `Le ${name} est catégorisé comme un ${result}`,
        takeaway: `Le ${name} propose des plats à emporter.`,
        nb_screen: `Le cinéma propose ${result} ecrans.`,
        capacity: `Le cinéma possède une capacité de ${result} spéctateurs.`,
        department: `Le département de la ville de ${name} est ${result}`,
      };
      const txt = (result == null) ? (`Nous n'avons pas trouvé ce ${serviceTraduction[service.constructor.name]} ou son information est manquante.`) : ((result === 'null' ? ('Information non disponible') : attributeSentence[attribute]));
      return getFulfillmentResponseFormat(txt, txt);
    });
  });
}

function getProximity(serviceA, nameA, serviceB) {
  return serviceB.getAll().then(list => serviceA.findByName(nameA).then((start) => {
    let next = list[1];
    let distance = distanceBeetween(next, start);

    list.forEach((object) => {
      if (distanceBeetween(object, start) < distance && distanceBeetween(object, start) !== 0) {
        distance = distanceBeetween(object, start);
        next = object;
      }
    });
    const txt = `Le plus proche est le ${next.name}.`;
    return getFulfillmentResponseFormat(txt, txt);
  }));
}

function distanceBeetween(o1, o2) {
  return Math.sqrt(Math.pow((parseFloat(o2.lat) - parseFloat(o1.lat)), 2)) + Math.pow((parseFloat(o2.long) - parseFloat(o1.long)), 2);
}

function eventOnDate(date) {
  const data = dateService.tradDate(date);
  return eventService.getAll().then((list) => {
    let txt = `Les évènement disponible au ${date} sont : `;
    const txtSize = txt.length;
    list.forEach((event) => {
      const start = dateService.tradDate(event.start_date);
      const end = dateService.tradDate(event.end_date);
      if (start < data && end > data) {
        txt += (` " ${event.title} "; `);
      }
    });
    txt = txt.substring(0, txt.length - 2);
    if (txt.length === txtSize - 2) {
      return getFulfillmentResponseFormat("Pas d'évènements pour cette date.", "Pas d'évènements pour cette date.");
    }
    return getFulfillmentResponseFormat(txt, txt);
  });
}

function nextEvent(name, number){
  if(isNaN(number)){
    number = 1;
  }else{
    number = parseInt(number);
  }
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy+mm+dd;
  return eventService.findByCity(name).then(list => {
    let next = 'Les prochains évènements à ' + name + " sont : ";
    const size = next.length;
    list.sort((a, b) => {
      return dateService.tradDate(a.start_date) - dateService.tradDate(b.start_date)
    });
    list.forEach(i => {
      if(dateService.tradDate(i.start_date)>today){
        if(number > 0 ){
          next += (` " ${i.title} " le ${i.start_date} ; `);
        }
        number --;
      }
    });
    if(next.length === size){
      next = "Nous n'avons pas trouvé de prochains évènements.";
    }
    return getFulfillmentResponseFormat(next, next);
  })
}

function addEvent(param) {
  if (!this.user) {
    return new Promise((resolve, reject) => resolve(getFulfillmentResponseFormat("Désolé vous n'avez pas accée à cette fonction. Connectez vous.", "Désolé vous n'avez pas accée à cette fonction. Connectez vous.")));
  }
  const date = dateService.tradString(param.given_date);
  let event = {
    organized_at : [],
    type: "",
    website: param.given_website,
    language: "fr",
    title: param.given_title,
    start_date: date[0],
    end_date: date[1],
    price: "",
  };
  return eventService.create(event).then((req)=>{
    return getFulfillmentResponseFormat("Evènement créé, id : " + req._id, "Evènement créé, id : " + req._id);
  });
}

function timeBeetween(param) {
  const service1 = nameToService[param.given_type.toLowerCase()];
  const service2 = nameToService[param.given_type2.toLowerCase()];
  return service1.findByName(param.given_name).then(res => {
    return (res === null)?(getFulfillmentResponseFormat("Nous n'avons pas trouvé le premier lieu demandé.")):service2.findByName(param.given_name2).then(res2 => {
      return (res2 === null)?(getFulfillmentResponseFormat("Nous n'avons pas trouvé le second lieu demandé.")):openRouteService.time([res.long, res.lat], [res2.long, res2.lat], param.vehicule).then(res => {
        if(res === "error"){
          return getFulfillmentResponseFormat("Il y à eu une erreur avec un de nos service partenaire, nous vous prions de nous excuser.")
        }
        let d = res.durations[0][1];
        let txt = "Vous devez prévoir " + dateService.displaySeconds(d) + " de trajet si la circulation est bonne.";
        return getFulfillmentResponseFormat(txt,txt);
      });
    })
  })
}

function findAdress(service, name) {
  return service.findByName(name).then(obj => {
    if(obj === null){
      return getFulfillmentResponseFormat("Nous n'avons pas retrouvé le lieu demandé.")
    }
    return openRouteService.adressFromPosition([obj.long, obj.lat]).then(res => {
      if(res === "error"){
        return getFulfillmentResponseFormat("Il y à eu une erreur avec un de nos service partenaire, nous vous prions de nous excuser.")
      }
      let address = res.features[0].properties.label;
      return getFulfillmentResponseFormat("L'adresse du " + name + " est " + address);
    })
  })
}

function setUser(req){
  this.user = req;
}

module.exports = { getResponse, setUser };
