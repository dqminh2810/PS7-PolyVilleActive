class BaseService{

  constructor(Obj) {
    this.Obj = Obj;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.Obj.find((err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  findByName(_name) {
    const params = { name: { $regex: new RegExp(_name, 'i') } };
    return new Promise((resolve, reject) => {
      this.Obj.findOne(params, (err, res) => {
        if (res === null) {
          return this.findByContains(_name).then(resultat => {resolve(resultat);});
        }
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  findById(objId) {
    const params = { _id: objId };
    return new Promise((resolve, reject) => {
      this.Obj.findOne(params, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        return resolve(res);
      });
    });
  }

  getAttribut(name, attribut) {
    return this.findByName(name).then((result) => {
      if (result === null) {
        return this.findByContains(name).then(res => {return res[attribut]});
      }
      return result[attribut];
    }).catch(err => null);
  }

  findByContains(string) {
    let word = string.split(' ');
    let max = '';
    let second = '';
    word.forEach(s => {
      if(max.length < s.length){
        second = max;
        max = s.toLowerCase();
      }else if(second.length < s.length){
        second = s.toLowerCase();
      }
    });
    return this.getAll().then((res) => {
      let next = null;
      let third = null;
      res.forEach(resto => {
        let name = resto.name.toLowerCase();
        if (name.includes(max) && name.includes(second)){
          next = resto;
        }
        if (name.includes(max) || name.includes(second)){
          third = resto;
        }
      });
      if(next === null)
        return third;
      return next;
    })
  }
}

module.exports = { BaseService };
