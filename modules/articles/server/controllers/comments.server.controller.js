'use strict'; 

 var path = require('path'),
 mongoose = require('mongoose'),
 Comment = mongoose.model('Comment'),
 errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.create = function (req, res) {
  var cmt = new Comment(req.body);
  cmt.user = req.user;
  cmt.save(function (err) {
    if (err) {
      return res.status(500).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cmt);
    }
  
  });
  };

 /**
 * Show the current article
 */
exports.read = function (req, res) {
  res.json(req.comment);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
  var cmt = req.comment;
  cmt.content = req.body.content;

  cmt.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cmt);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Comment.find().sort('-created').exec(function (err, comments) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(comments);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var cmt = req.cmt;

  cmt.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(cmt);
    }
  });
};

/**
 * Article middleware
 */
exports.articleByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Article is invalid'
    });
  }

  Comment.findById(id).exec(function (err, cmt) {
    if (err) {
      return next(err);
    } else if (!cmt) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.comment = cmt;
    next();
  });
};
