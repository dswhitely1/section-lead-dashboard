const express = require('express');

const unitRouter = express.Router();
const Units = require('../../../data/models/unit.model');
const unitValidator = require('../../validators/unit.validator');

function allUnits(req, res) {
  Units.findAll()
    .then(units => res.json(units))
    .catch(err => res.status(500).json(err));
}

function unit(req, res) {
  Units.findById(req.params.id)
    .then(foundUnit => {
      if (foundUnit) {
        res.json(foundUnit);
      } else {
        res.status(404).json({ message: 'Unit Not Found' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function addUnit(req, res) {
  const { errors, isValid } = unitValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Units.add(req.body)
    .then(saved => {
      if (saved) {
        res.json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updateUnit(req, res) {
  Units.update(req.params.id, req.body)
    .then(updated => {
      if (updated) {
        res.json(updated);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function deleteUnit(req, res) {
  Units.remove(req.params.id)
    .then(units => res.json(units))
    .catch(err => res.status(500).json(err));
}

unitRouter
  .get('/', allUnits)
  .get('/:id', unit)
  .post('/', addUnit)
  .put('/:id', updateUnit)
  .delete('/:id', deleteUnit);

module.exports = unitRouter;
