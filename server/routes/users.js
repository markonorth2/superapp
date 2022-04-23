const router = require('express').Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan', 'Mark', 'Uy'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
      res.json(users);
  });

  return router;
}
