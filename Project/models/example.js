module.exports = function(sequelize, DataTypes) {
  var bwaters = sequelize.define("bwaters", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    tripType: DataTypes.STRING,
    question1: DataTypes.INTEGER,
    question2: DataTypes.INTEGER,
    question3: DataTypes.INTEGER,
    question4: DataTypes.INTEGER,
    question5: DataTypes.INTEGER,
    WentTrip: DataTypes.BOOLEAN
  });
  return bwaters;
};