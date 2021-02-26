const { City } = require('../../../models/index');
const { LocationService } = require('../LocationService');
const csv = require('csv-parser');
const fs = require('fs');
const { city_dataset_csv_path } = require('./city_config');
const { CountryService } = require('../country/CountryService');

class CityService {
  constructor() {
    this.service = new LocationService(City);
  }

  getAll() {
    return this.service.getAll();
  }

  findByName(_name) {
    return this.service.findByName(_name);
  }

  findById(countryId) {
    return this.service.findById(countryId);
  }

  getAttribut(name, attribute){
    return this.service.getAttribut(name, attribute);
  }

  async buildDataSet(){
      const country_service = new CountryService();
      await City.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });
      await country_service.findByCode('FR')
          .then((country) => {
              //console.log(country);
              const cities = [];
              //console.log(city_dataset_csv_path);
              fs.createReadStream(city_dataset_csv_path)
                  .pipe(csv({ separator: ';' }))
                  .on('data', (row) => {
                      cities.push(row);
                      const city = new City({
                          name: row.name,
                          lat: row.lat,
                          long: row.long,
                          department: row.department,
                          located_in: country,
                      });
                      city.save()
                          .then((doc) => {
                              //console.log(doc);
                          })
                          .catch((err) => {
                              console.error(err);
                          });
                  })
                  .on('end', () => {
                      // console.log(events);
                  });

          }).catch((err) => {
          console.log(err);
      });
  }
}

module.exports = { CityService };
