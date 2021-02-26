const { Cinema } = require('../../../models/index');
const { EmplacementService } = require("../EmplacementService");
const csv = require('csv-parser');
const fs = require('fs')
const { cinema_dataset_csv_path } = require('./cinema_config');
const { CityService } = require('../../location/city/CityService');

class CinemaService {
  service = new EmplacementService(Cinema);

   getAll(){
     return this.service.getAll();
   }

  findByName(_name) {
    return this.service.findByName(_name);
  }

  getRandomCinema() {
    return this.service.getRandom();
  }

  create(object) {
    return this.service.create(object);
  }

  findByContains(string) {
    return this.service.findByContains(string);
  }

  findById(cinemaId) {
    return this.service.findById(cinemaId);
  }

  findByCity(city){
    return this.service.findByCity(city)
  }

  findByCountry(country){
    return this.service.findByCountry(country)
  }

  create(cinema){
    return this.service.create(cinema);
  }

  update(oldOne, newOne) {
    return this.service.update(oldOne,newOne);
  }

  delete(cinemaId) {
    return this.service.delete(cinemaId);
  }

  getRandomCinema() {
    this.getAll()
      .then((res) => {
        let random_index = Math.floor(Math.random() * Math.floor(res.length));
        //console.log(res.length);
        return res.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAttribut(name, attribut) {
    return this.service.getAttribut(name, attribut);
  }


    async buildDataSet(){
        const city_service = new CityService();
        await Cinema.deleteMany()
            .then(() => {
            })
            .catch((err) => {
                console.error(err);
            });

        const cinemas = [];
        // console.log(cinema_dataset_csv_path);
        await fs.createReadStream(cinema_dataset_csv_path)
            .pipe(csv({ separator: ';' }))
            .on('data', (row) => {
                cinemas.push(row);
                let city = null;
                city_service.findByName(row.com_nom)
                    .then((docs) => {
                        if (docs != null) {
                            city = docs;
                            const cinema = new Cinema({
                                name: row.name,
                                opening_hour: row.opening_hours,
                                wheelchair: row.wheelchair,
                                nb_screen: row.nb_screens,
                                phone: row.phone,
                                website: row.website,
                                lat: row.lat,
                                long: row.long,
                                is_in: city,
                            });
                            cinema.save()
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

module.exports = { CinemaService };
