const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  date: {
    type: DataTypes.STRING,
  },
});

module.exports = { Review };
