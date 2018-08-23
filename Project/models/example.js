module.exports = function (sequelize, DataTypes) {
  var bwaters = sequelize.define("bwaters", {

    firstName = DataTypes.string,
    lastName = DataTypes.string,
    tripType = DataTypes.string,
    question1 = DataTypes.int,
    question2 = DataTypes.int,
    question3 = DataTypes.int,
    question4 = DataTypes.int,
    question5 = DataTypes.int,
    Went_Trip = DataTypes.boolean

  });
  return bwaters;
};