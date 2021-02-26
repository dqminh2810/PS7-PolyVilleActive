const { BaseService } = require('../BaseService');

class ActivityService {
  constructor(Obj) {
    this.Obj = Obj;
    this.service = new BaseService(Obj);
  }

  getAll(){
    return this.service.getAll();
  }

  findById(id){
    return this.service.findById(id);
  }

  findByCity(city){
    return this.Obj.aggregate([
      {
        $lookup: {
          from: "Cinema", localField: "organized_at", foreignField: "_id", as: "emplacement_info_cinema"
        }
      },
      {
        $lookup: {
          from: "Restaurant", localField: "organized_at", foreignField: "_id", as: "emplacement_info_restaurant"
        }
      },
      {
        $lookup: {
          from: "Library", localField: "organized_at", foreignField: "_id", as: "emplacement_info_library"
        }
      },
      {
        $lookup: {
          from: "SportCenter", localField: "organized_at", foreignField: "_id", as: "emplacement_info_sport_center"
        }
      },
      {
        $lookup: {
          from: "City", localField: "emplacement_info_cinema.is_in", foreignField: "_id", as: "emplacement_info_cinema_city"
        }
      },
      {
        $lookup: {
          from: "City", localField: "emplacement_info_restaurant.is_in", foreignField: "_id", as: "emplacement_info_restaurant_city"
        }
      },
      {
        $lookup: {
          from: "City", localField: "emplacement_info_library.is_in", foreignField: "_id", as: "emplacement_info_library_city"
        }
      },
      {
        $lookup: {
          from: "City", localField: "emplacement_info_sport_center.is_in", foreignField: "_id", as: "emplacement_info_sport_center_city"
        }
      },
      {
        $match: {
          $or: [
            { 'emplacement_info_cinema_city.name': { $regex : new RegExp(city, 'i')} },
            { 'emplacement_info_restaurant_city.name': { $regex : new RegExp(city, 'i')} },
            { 'emplacement_info_library_city.name': { $regex : new RegExp(city, 'i')} } ,
            { 'emplacement_info_restaurant_city.name': { $regex : new RegExp(city, 'i')} } ,
          ]
        }
      },
      {
        $project: {
          _id: 1,
          cinema_name: '$emplacement_info_cinema.name',
          restaurant_name: '$emplacement_info_restaurant.name',
          library_name: '$emplacement_info_library.name',
          sport_center_name: '$emplacement_info_sport_center.name',
          cinema_city: '$emplacement_info_cinema_city.name',
          restaurant_city: '$emplacement_info_restaurant_city.name',
          library_city: '$emplacement_info_library_city.name',
          sport_center_city: '$emplacement_info_sport_center_city.name',
          title: 1,
          type: 1,
          start_date: 1,
          end_date:1,
        }
      }
    ]).exec();
  }
}

module.exports = {ActivityService};
