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
  status: {
    type: DataTypes.BOOLEAN,
  },
  email: {
    type: DataTypes.STRING,
  },
});

const BlogCards = sequelize.define('blogs', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  dislikes: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  title: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  comments: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});
<<<<<<< HEAD
sequelize.sync({ force: true });
=======

//sequelize.sync({ force: true });
>>>>>>> 9a6d22f152e83ac49444d02c301fcc5a0f0146a3
module.exports = { Review, BlogCards };
