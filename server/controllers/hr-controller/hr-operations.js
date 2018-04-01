let dbHelper = require('../../lib/dbHelper');
let HrModel = dbHelper.getModel('hr');

class HrOpt {

  regist(data) {
    return new Promise((resolve, reject) => {
      HrModel.create(data)
        .then(hr => {
          resolve(hr);
        })
        .catch(() => {
          reject('fail');
        });
    });
  }

}
module.exports = new HrOpt;
