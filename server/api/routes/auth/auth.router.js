const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../../auth/token');
const Users = require('../../../data/models/users.model');

const authRouter = express.Router();

function register(req, res) {
  const user = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      const newUser = { username: user.username, password: hash };
      Users.add(newUser)
        .then(saved => {
          res.status(201).json(saved);
        })
        .catch(error => res.status(500).json(error));
    });
  });
}

function login(req, res) {
  const { username, password } = req.body;
  Users.findBy({ username }).then(user => {
    if (user === undefined) {
      return res.status(404).json({ username: 'Username not Found' });
    }
    bcrypt
      .compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const token = generateToken(user);
          res.json({
            username: user.username,
            id: user.id,
            token: `Bearer ${token}`,
          });
        } else {
          res.status(401).json({ message: 'Error: Invalid Credentials' });
        }
      })
      .catch(error => res.status(500).json(error));
  });
}
authRouter.post('/register', register).post('/login', login);
module.exports = authRouter;
