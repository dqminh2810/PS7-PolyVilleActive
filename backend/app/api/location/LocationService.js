const { BaseService } = require('../BaseService');

class LocationService {
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

  getAttribut(name, attribute){
    return this.service.getAttribut(name, attribute);
  }
}

module.exports = { LocationService };
