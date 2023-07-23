const userModel = require("./userModel");

module.exports.getDataFromDBService = () => {
  return userModel.find({}).exec();
};

module.exports.createUserDBService = (userDetails) => {
  const userModelData = new userModel({
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    dob: userDetails.dob,
    gender: userDetails.gender,
    address: userDetails.address,
  });

  return userModelData.save();
};

module.exports.createUserDBService = (userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var userModelData = new userModel();

    userModelData.firstName = userDetails.firstName;
    userModelData.lastName = userDetails.lastName;
    userModelData.dob = userDetails.dob;
    userModelData.gender = userDetails.gender;
    userModelData.address = userDetails.address;

    userModelData
      .save()
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
};
module.exports.updateUserDBService = (id, userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    userModel
      .findByIdAndUpdate(id, userDetails)
      .then(() => resolve(true))
      .catch(() => reject(false));
  });
};

module.exports.removeUserDBService = (id) => {
  return new Promise(function myFn(resolve, reject) {
    userModel.findByIdAndDelete(id, function returnData(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(result);
      }
    });
  });
};
module.exports.removeUserDBService = (id) => {
  return new Promise(function myFn(resolve, reject) {
    userModel
      .findByIdAndDelete(id)
      .then((result) => resolve(result))
      .catch(() => reject(false));
  });
};
