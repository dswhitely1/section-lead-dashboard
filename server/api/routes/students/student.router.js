const express = require('express');

const studentsRouter = express.Router();
const Students = require('../../../data/models/students.model');
const peopleValidator = require('../../validators/people.validator');

function allstudents(req, res) {
  Students.findAll()
    .then(allStudents => res.json(allStudents))
    .catch(err => res.status(500).json(err));
}

function getStudentsByTeamLeadId(req, res) {
  Students.findByTeamLeadId(req.params.id)
    .then(groups => res.json(groups))
    .catch(err => res.status(500).json(err));
}

function students(req, res) {
  Students.findById(req.params.id)
    .then(user => {
      console.log(user);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User Not Found' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function addstudents(req, res) {
  const { errors, isValid } = peopleValidator(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Students.add(req.body)
    .then(saved => {
      if (saved) {
        res.status(201).json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updatestudents(req, res) {
  Students.update(req.params.id, req.body)
    .then(saved => {
      if (saved) {
        res.json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function deletestudents(req, res) {
  Students.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

studentsRouter
  .get('/', allstudents)
  .get('/:id', students)
  .get('/group/:id', getStudentsByTeamLeadId)
  .post('/', addstudents)
  .put('/:id', updatestudents)
  .delete('/:id', deletestudents);

module.exports = studentsRouter;
