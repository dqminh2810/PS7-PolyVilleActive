const { BaseService } = require('../BaseService');

class PeopleService {
  constructor(Obj) {
    this.Obj = Obj;
    this.service = new BaseService(Obj);
  }

  getAll() {
    return this.service.getAll();
  }

  findByName(name){
    return this.service.findByName(name);
  }

  findById(id){
    return this.service.findById(id);
  }

  findByCity(city){
    return this.Obj.aggregate([
      {
        $lookup: {
          from: "City", localField: "live_in", foreignField: "_id", as: "user_city"
        }
      },

      {
        $match: {
          $or: [
            { 'user_city.name': { $regex : new RegExp(city, 'i')} },
          ]
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          emplacement_city:'$user_city.name',
        }
      }
    ]).exec();
  }
  findByCountry(country){
    return this.Obj.aggregate([
      {
        $lookup: {
          from: "City", localField: "live_in", foreignField: "_id", as: "people_city"
        },
      },
      {
        $lookup: {
          from: "Country", localField: "people_city.located_in", foreignField: "_id", as: "city_country"
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

module.exports = { PeopleService };
