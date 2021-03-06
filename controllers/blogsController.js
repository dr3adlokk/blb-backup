const Blog = require("../models/blogmodel/blogmodel")

// defining methods for the episodeController
module.exports = {
    findAll: function(req, res) {
        Blog
            .find({})
            .sort({ date: -1})
            .then(dbModel => res.json(dbMOdel))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        Blog
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        Blog
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        Blog
            .findOneAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        Blog 
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
}