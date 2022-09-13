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
});

const Comments = sequelize.define('comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Comments.belongsTo(BlogCards);
BlogCards.hasMany(Comments);

sequelize.sync({ force: true });
module.exports = { Review, BlogCards, Comments };
