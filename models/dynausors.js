const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  const Dinosaur = sequelize.define("dinosaur", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    scientificName: {
      type: DataTypes.STRING,
    },
    apparitionYear: {
      type: DataTypes.INTEGER,
    },
    disappearanceYear: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
    },
  });
  return Dinosaur;
};
