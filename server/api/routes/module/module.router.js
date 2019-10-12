const express = require('express');

const moduleRouter = express.Router();
const Modules = require('../../../data/models/module.model');
const unitValidator = require('../../validators/unit.validator');

function allModules(req, res) {
  Modules.findAll()
    .then(foundModules => res.json(foundModules))
    .catch(err => res.status(500).json(err));
}

function moduleById(req, res) {
  Modules.findById(req.params.id)
    .then(foundModule => {
      if (foundModule) {
        res.json(foundModule);
      } else {
        res.status(404).json({ message: 'Module Not Found' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function modulesBySprintId(req, res) {
  Modules.findBySprintId(req.params.id)
    .then(foundModules => res.json(foundModules))
    .catch(err => res.status(500).json(err));
}

function addModule(req, res) {
  const { errors, isValid } = unitValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Modules.add(req.body)
    .then(saved => {
      if (saved) {
        res.status(201).json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(400).json(err));
}

function updateModule(req, res) {
  Modules.update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.json(updated);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function deleteModule(req, res) {
  Modules.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}
moduleRouter
  .get('/', allModules)
  .get('/:id', moduleById)
  .get('/sprint/:id', modulesBySprintId)
  .post('/', addModule)
  .put('/:id', updateModule)
  .delete('/:id', deleteModule);
module.exports = moduleRouter;
