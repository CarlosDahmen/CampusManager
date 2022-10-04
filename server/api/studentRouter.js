const Student = require('../db/models/student');
const Campus = require('../db/models/campus');
const studentRouter = require('express').Router();


// GET /api/students/:studentId
studentRouter.get('/:id', async (req, res, next) => {
  try {
    const student = await Student.findOne(
      {where: {id: req.params.id}}
    );
    ('GET req', student)
    res.json(student)
    } catch (err) {
      next(err);
    }
});

//PUT /api/students/:id
studentRouter.put('/:id', async (req, res, next) => {
  try {
    const toUpdate = await Student.findByPk(
      req.params.id,
      // {
      //   include: Campus
      // }
    );

    const update = await toUpdate.update(req.body);
    res.send(update);
  } catch (err) {
    next(err)
  }
})

// GET /api/students
studentRouter.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({order: ["id"]});
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/students/:id
studentRouter.delete('/:id', async (req, res, next) => {
  try {
    const toDestroy = await Student.findByPk(req.params.id);
    await toDestroy.destroy();
    res.send(toDestroy);
  } catch (err) {
    next(err)
  }
});

// POST /api/students
studentRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (err) {
    next(err)
  }
})

module.exports = studentRouter
