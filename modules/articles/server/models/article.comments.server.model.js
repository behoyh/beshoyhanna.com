'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleCommentSchema = new Schema({
  articleid: {
    type: Schema.ObjectId,
    ref : 'Article'
  },
  created: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    required: 'Comment cannot be blank'
  },
  user: {
    type: Object
  }
});

mongoose.model('Comment', ArticleCommentSchema);
