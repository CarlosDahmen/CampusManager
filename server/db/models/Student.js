const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
      }
  },
  imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498__480.jpg'
    },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
      },
  }
});
