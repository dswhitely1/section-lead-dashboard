const express = require('express');
const bcrypt = require('bcryptjs');
const generateToken = require('../../auth/token');
const Users = require('../../../data/models/users.model');
const validateRegisterInputs = require('../../validators/register.validator');
const validateLoginInputs = require('../../validators/login.validator');

const authRouter = express.Router();

function register(req, res) {
  const user = req.body;
  const { errors, isValid } = validateRegisterInputs(user);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Users.findBy({ username: user.username })
    .then(foundUser => {
      if (foundUser !== undefined) {
        errors.username = 'Username is already taken';
        return res.status(400).json(errors);
      }

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) throw err;
          const newUser = { username: user.username, password: hash };
          Users.add(newUser)
            .then(saved => {
              const token = generateToken(saved);
              res.status(201).json({ token: `Bearer ${token}` });
            })
            .catch(error => res.status(500).json(error));
        });
      });
    })
    .catch(error => res.status(500).json(error));
}

function login(req, res) {
  const { username, password } = req.body;
  const { errors, isValid } = validateLoginInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Users.findBy({ username }).then(user => {
    if (user === undefined) {
      errors.username = 'Username not Found';
      return res.status(404).json(errors);
    }
    bcrypt
      .compare(password, user.password)
      .then(isMatch => {
        if (isMatch) {
          const token = generateToken(user);
          res.json({
            token: `Bearer ${token}`,
          });
        } else {
          errors.password = 'Password is Incorrect';
          res.status(401).json(errors);
        }
      })
      .catch(error => res.status(500).json(error));
  });
}

authRouter.post('/register', register).post('/login', login);
module.exports = authRouter;
