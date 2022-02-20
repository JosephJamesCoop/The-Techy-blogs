const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/createPost', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('createPost');
});

module.exports = router;
