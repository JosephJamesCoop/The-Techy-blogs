const User = require('./User');
const Post = require("./Post");
const Vote = require("./Vote");
const Comment = require('./Comment');

// user can create multiple post
User.hasMany(Post, {
  foreignKey: 'user_id'
});

// User can vote on multiple post
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'user_id'
});

//User can have multiple votes
User.hasMany(Vote, {
  foreignKey: 'user_id'
});

// User can have multiple comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// the post belongs to the user who created it.
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Many users can vote on the post
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id'
});

// post can have multiplle votes attached to it
Post.hasMany(Vote, {
  foreignKey: 'post_id'
});

// Post can have multiple comments attached to it
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

// The user creates the Vote and is attached to that user ID
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

// The Vote the user created is also attached to the Post through its ID
Vote.belongsTo(Post, {
  foreignKey: 'post_id'
});

// The user creates the Comment and is attached to that user ID
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// The Comment the user created is also attached to the Post through its ID
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Vote, Comment };