const express = require('express');

const teamLeadRouter = express.Router();
const TeamLeads = require('../../../data/models/teamlead.model');

function allTeamLeads(req, res) {
  TeamLeads.findAll()
    .then(teamLeads => res.json(teamLeads))
    .catch(err => res.status(500).json(err));
}

function teamLead(req, res) {
  TeamLeads.findById(req.params.id)
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

function addTeamLead(req, res) {
  TeamLeads.add(req.body)
    .then(saved => {
      if (saved) {
        res.status(201).json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function updateTeamLead(req, res) {
  TeamLeads.update(req.params.id, req.body)
    .then(saved => {
      if (saved) {
        res.json(saved);
      } else {
        res.status(400).json({ message: 'An error has occurred' });
      }
    })
    .catch(err => res.status(500).json(err));
}

function deleteTeamLead(req, res) {
  TeamLeads.remove(req.params.id)
    .then(count => res.json(count))
    .catch(err => res.status(500).json(err));
}

teamLeadRouter
  .get('/', allTeamLeads)
  .get('/:id', teamLead)
  .post('/', addTeamLead)
  .put('/:id', updateTeamLead)
  .delete('/:id', deleteTeamLead);

module.exports = teamLeadRouter;
