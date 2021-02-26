const { SportCenter } = require('../../../models/index');
const { EmplacementService } = require("../EmplacementService");
const csv = require('csv-parser');
const fs = require('fs');
const { sportCenter_dataset_csv_path } = require('./sportCenter_config');
const { CityService } = require('../../location/city/CityService');

class SportCenterService {
  service = new EmplacementService(SportCenter);

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
      await SportCenter.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });
      const sportcenters = [];
      //console.log(sportCenter_dataset_csv_path);
      await fs.createReadStream(sportCenter_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              sportcenters.push(row);
              let city = null;
              city_service.findByName(row.com_nom)
                  .then((docs) => {
                      if (docs != null) {
                          city = docs;
                          const library = new SportCenter({
                              name: row.name,
                              sport_types: row.sport_types,
                              lat: row.lat,
                              long: row.long,
                              is_in: city
                          });
                          library.save()
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

module.exports = { SportCenterService };
