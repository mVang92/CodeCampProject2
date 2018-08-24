module.exports = function(sequelize, DataTypes) {
  var bwaters = sequelize.define("bwaters", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    Q1: DataTypes.INTEGER,
    Q2: DataTypes.INTEGER,
    Q3: DataTypes.INTEGER,
    Q4: DataTypes.INTEGER,
    Q5: DataTypes.INTEGER,
    comments: DataTypes.STRING
  });
  return bwaters;
};
