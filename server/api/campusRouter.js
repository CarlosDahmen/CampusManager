const Campus = require('../db/models/campus');
const Student = require('../db/models/student')
const campusRouter = require('express').Router();

// GET /api/campuses/:campusId
campusRouter.get('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findOne(
      {where: {id: req.params.id}}
      );

    const students = await Student.findAll(
      {where: {campusId: req.params.id}}
    )
    res.json({campus, students})
  } catch (err) {
    next(err);
  }
});

//PUT /api/campuses/:id
campusRouter.put('/:id', async (req, res, next) => {
  try {
    const toUpdate = await Campus.findByPk(req.params.id);
    res.send(await toUpdate.update(req.body))
  } catch (err) {
    next(err)
  }
})

// GET /api/campuses
campusRouter.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/campuses/:id
campusRouter.delete('/:id', async (req, res, next) => {
  try {
    const toDestroy = await Campus.findByPk(req.params.id);
    await toDestroy.destroy();
    res.send(toDestroy);
  } catch (err) {
    next(err)
  }
});

// POST /api/campuses
campusRouter.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (err) {
    next(err)
  }
})

module.exports = campusRouter
