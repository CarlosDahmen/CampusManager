const db = require('./database');
// const Student = require('./models/student')
const Campus = require('./models/campus')
const Student = require('./models/student')

//Model Associations
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  db,
  Student,
  Campus,
}
