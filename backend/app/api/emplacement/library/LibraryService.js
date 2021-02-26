const { Library } = require('../../../models/index');
const { EmplacementService } = require("../EmplacementService");
const csv = require('csv-parser');
const fs = require('fs');
const { library_dataset_csv_path } = require('./library_config');
const { CityService } = require('../../location/city/CityService');

class LibraryService{
  service = new EmplacementService(Library);

  getAll() {
    return this.service.getAll();
  }

  getRandomLibrary() {
    return this.service.getRandom();
  }

  findByName(_name) {
    return this.service.findByName(_name);
  }

  findByContains(string) {
    return this.service.findByContains(string);
  }

  findById(libraryId) {
    return this.service.findById(libraryId);
  }

  findByCity(city){
    return this.service.findByCity(city)
  }

  findByCountry(country){
    return this.service.findByCountry(country)
  }

  create(library) {
    return this.service.create(library);
  }

  update(oldOne, newOne) {
    return this.service.update(oldOne, newOne);
  }

  delete(libraryId) {
    return this.service.delete(libraryId);
  }

  getAttribut(name, attribut) {
    return this.service.getAttribut(name, attribut);
  }
  async buildDataSet(){
      const city_service = new CityService();
      await Library.deleteMany()
          .then(() => {
          })
          .catch((err) => {
              console.error(err);
          });
      const librarys = [];
      //console.log(library_dataset_csv_path);
      await fs.createReadStream(library_dataset_csv_path)
          .pipe(csv({ separator: ';' }))
          .on('data', (row) => {
              librarys.push(row);
              let city = null;
              city_service.findByName(row.com_nom)
                  .then((docs) => {
                      if (docs != null) {
                          city = docs;
                          const library = new Library({
                              name: row.name,
                              opening_hour: row.opening_hours,
                              wheelchair: row.wheelchair,
                              lat: row.lat,
                              long: row.long,
                              is_in: city,
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

module.exports = { LibraryService };
