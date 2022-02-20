const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/createPost', (req, res) => {
  if (req.session.loggedIn) {
    res.render('createPost');
    return;
  }
  res.redirect('/');
});

module.exports = router;
