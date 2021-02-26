const { BaseService } = require('../BaseService');

class EmplacementService{
  constructor(Obj) {
    this.Obj = Obj;
    this.service = new BaseService(Obj);
  }

  Obj;

  getAll() {
        return this.service.getAll();
  }

  findByName(_name) {
    return this.service.findByName(_name);
  }

  create(object) {
    return new Promise((resolve, reject) => {
      this.Obj.create(object, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  findById(objId) {
    return this.service.findById(objId);
  }

  create(obj) {
    return new Promise((resolve, reject) => {
      this.Obj.create(obj, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  update(oldOne, newOne) {
    return new Promise((resolve, reject) => {
      oldOne.updateOne(newOne, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  delete(cinemaId) {
    return new Promise((resolve, reject) => {
      this.Obj.findByIdAndRemove(cinemaId, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  getAttribut(name, attribut) {
    return this.service.getAttribut(name,attribut);
  }

  findByContains(string) {
    return this.service.findByContains(string);
  }

  getRandom() {
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

  findByCity(city){
    return this.Obj.aggregate([
      {
        $lookup: {
          from: "City", localField: "is_in", foreignField: "_id", as: "emplacement_city"
        }
      },

      {
        $match: {
          $or: [
            { 'emplacement_city.name': { $regex : new RegExp(city, 'i')} },
          ]
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          emplacement_city:'$emplacement_city.name',
        }
      }
    ]).exec();
  }

  findByCountry(country){
    return this.Obj.aggregate([
      {
        $lookup: {
          from: "City", localField: "is_in", foreignField: "_id", as: "emplacement_city"
        },
      },
      {
        $lookup: {
          from: "Country", localField: "emplacement_city.located_in", foreignField: "_id", as: "city_country"
        },
      },

      {
        $match: {
          $or: [
            { 'city_country.name': { $regex : new RegExp(country, 'i')} },
          ]
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          country:'$city_country.name',
        }
      }
    ]).exec();
  }
}

module.exports = { EmplacementService };
