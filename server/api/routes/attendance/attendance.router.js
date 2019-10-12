const express = require('express');

const attendanceRouter = express.Router();
const Attendance = require('../../../data/models/attendance.model');

function allAttendance(req, res) {
  Attendance.findAll()
    .then(results => res.json(results))
    .catch(err => res.status(500).json(err));
}

function singleAttendance(req, res) {
  Attendance.findById(req.params.id)
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ message: 'Attendance not Found' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function studentAttendance(req, res) {
  Attendance.findByStudentId(req.params.id)
    .then(results => res.json(results))
    .catch(err => res.status(500).json(err));
}

function addAttendance(req, res) {
  Attendance.add(req.body)
    .then(saved => {
      if (saved) {
        res.json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updateAttendance(req, res) {
  Attendance.update(req.params.id, req.body)
    .then(updated => res.json(updated))
    .catch(err => res.status(500).json(err));
}

function deleteAttendance(req, res) {
  Attendance.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

attendanceRouter
  .get('/', allAttendance)
  .get('/:id', singleAttendance)
  .get('/student/:id', studentAttendance)
  .post('/', addAttendance)
  .put('/:id', updateAttendance)
  .delete('/:id', deleteAttendance);

module.exports = attendanceRouter;
