const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498__480.jpg'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  description: {
    type: Sequelize.TEXT
  }
});
