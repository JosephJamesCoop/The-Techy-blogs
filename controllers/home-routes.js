const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session)
  Post.findAll({
    attributes: [
      'id',
      'post_text',
      'title',
      'created_at',
    ],
   
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signUp', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signUp');
});


module.exports = router;