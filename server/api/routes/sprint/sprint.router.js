const express = require('express');

const sprintRouter = express.Router();
const Sprints = require('../../../data/models/sprint.model');
const unitValidator = require('../../validators/unit.validator');

function allSprints(req, res) {
  Sprints.findAll()
    .then(foundSprints => res.json(foundSprints))
    .catch(err => res.status(500).json(err));
}

function sprint(req, res) {
  Sprints.findById(req.params.id)
    .then(foundSprint => {
      if (foundSprint) {
        res.json(foundSprint);
      } else {
        res.status(404).json({ message: 'sprint Not Found' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function findSprintByUnitId(req, res) {
  Sprints.findByUnitId(req.params.id)
    .then(sprints => res.json(sprints))
    .catch(err => res.status(500).json(err));
}

function addSprint(req, res) {
  const { errors, isValid } = unitValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  console.log(req.body);
  Sprints.add(req.body)
    .then(saved => {
      if (saved) {
        res.json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updateSprint(req, res) {
  Sprints.update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.json(updated);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function deleteSprint(req, res) {
  Sprints.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

sprintRouter
  .get('/', allSprints)
  .get('/:id', sprint)
  .get('/sprints', findSprintByUnitId)
  .post('/', addSprint)
  .put('/:id', updateSprint)
  .delete('/:id', deleteSprint);

module.exports = sprintRouter;
