var request = require('request');

class OpenRouteService{


  time(position1, position2, loco){
    const tradVehicule = {
      Car : "driving-car",
      Walk : "foot-walking",
      Cycling : "cycling-regular"
    };

    if(loco === undefined || loco === "")
      loco = "Car";

    return new Promise(function(resolve, reject){
      const url = 'https://api.openrouteservice.org/v2/matrix/' + (tradVehicule)[loco];
      request({
        method: 'POST',
        url: url,
        body: '{"locations":[['+position1 +'],['+ position2 +']],"metrics":["duration","distance"]}',
        headers: {
          'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
          'Authorization': '5b3ce3597851110001cf6248cb884c1e559549d98c3b9a227541a17a',
          'Content-Type': 'application/json; charset=utf-8'
        }}, function (error, response, body) {
        try{
          let json = JSON.parse(body);
          resolve(json);
        }catch (e) {
          console.log(e);
          resolve("error");
        }
      });
    });
  }

  adressFromPosition(position){
    const url = "https://api-adresse.data.gouv.fr/reverse/?lon="+position[0]+"&lat=" + position[1];
    return new Promise(function(resolve, reject){
      request({
        method: 'GET',
        url: url
      }, function (error, response, body) {
        try{
          let json = JSON.parse(body);
          resolve(json);
        }catch (e) {
          console.log(e);
          resolve("error");
        }
      });
    });
  }
}

module.exports = {OpenRouteService};
