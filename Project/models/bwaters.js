module.exports = function(sequelize, DataTypes) {
  var bwaters = sequelize.define("bwaters", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    Q1: {
      type: DataTypes.INTEGER
    },

    Q2: {
      type: DataTypes.INTEGER
    },

    Q3: {
      type: DataTypes.INTEGER
    },

    Q4: {
      type: DataTypes.INTEGER
    },

    Q5: {
      type: DataTypes.INTEGER
    },

    comments: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return bwaters;
};
