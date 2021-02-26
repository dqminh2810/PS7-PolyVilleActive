const { Restaurant } = require('../../../models/index');
const { EmplacementService } = require("../EmplacementService");
const csv = require('csv-parser');
const fs = require('fs');
const { restaurant_dataset_csv_path } = require('./restaurant_config');
const { CityService } = require('../../location/city/CityService');

class RestaurantService {
  service = new EmplacementService(Restaurant);

  getAll() {
    return this.service.getAll();
  }

  findByName(name) {
    return this.service.findByName(name);
  }

  findByContains(string) {
    return this.service.findByContains(string);
  }

  findById(restaurantId) {
    return this.service.findById(restaurantId);
  }

  findByCity(city){
    return this.service.findByCity(city)
  }

  findByCountry(country){
    return this.service.findByCountry(country)
  }

  create(restaurant) {
    return this.service.create(restaurant);
  }

  update(oldOne, newOne) {
    return this.service.update(oldOne, newOne);
  }

  delete(restaurantId) {
    return this.service.delete(restaurantId);
  }

  getAttribut(name, attribut) {
    return this.service.getAttribut(name, attribut);
  }
  async buildDataSet(){
      const city_service = new CityService();
      await Restaurant.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });

      const restaurants = [];
      //console.log(restaurant_dataset_csv_path);
      await fs.createReadStream(restaurant_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              restaurants.push(row);
              let city = null;
              city_service.findByName(row.com_nom)
                  .then((docs) => {
                      if (docs != null) {
                          city = docs;
                          const restaurant = new Restaurant({
                              name: row.name,
                              type_restaurant: row.type,
                              type_cuisine: row.cuisine,
                              opening_hour: row.opening_hours,
                              wheelchair: row.wheelchair,
                              delivery: row.delivery,
                              takeaway: row.takeaway,
                              phone: row.phone,
                              website: row.website,
                              lat: row.lat,
                              long: row.long,
                              is_in: city,
                          });
                          restaurant.save()
                              .then((doc) => {
                                  //console.log(doc);
                              })
                              .catch((err) => {
                                  console.error(err);
                              });
                      }
                  })
                  .catch((err) => {
                      console.log(err);
                  });
          })
          .on('end', () => {
              // console.log(cinemas);
          });
  }
}

module.exports = { RestaurantService };
