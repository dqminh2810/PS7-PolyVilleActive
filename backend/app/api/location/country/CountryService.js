const { Country } = require('../../../models/index');
const { LocationService } = require('../LocationService');
const csv = require('csv-parser');
const fs = require('fs');
const { country_dataset_csv_path } = require('./country_config');

class CountryService {
  constructor() {
    this.service = new LocationService(Country);
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

  findByCode(_code) {
    const params = { code: _code };
    return new Promise((resolve, reject) => {
      Country.findOne(params, (err, docs) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(docs);
      });
    });
  }

  async buildDataSet(){
      await Country.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });
      const countries = [];
      //console.log(country_dataset_csv_path);
      await fs.createReadStream(country_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              countries.push(row);
              const restaurant = new Country({
                  name: row.name,
                  code: row.country,
                  lat: row.lat,
                  long: row.long,
              });
              restaurant.save()
                  .then((doc) => {
                      //console.log(doc);
                  })
                  .catch((err) => {
                      console.error(err);
                  });
          })
          .on('end', () => {
              // console.log(cinemas);
          });
  }
}

module.exports = { CountryService };
