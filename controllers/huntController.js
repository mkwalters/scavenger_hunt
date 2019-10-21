var huntModel = require('../models/huntModel.js');

/**
 * huntController.js
 *
 * @description :: Server-side logic for managing hunts.
 */
module.exports = {

    /**
     * huntController.list()
     */
    list: function (req, res) {
        huntModel.find(function (err, hunts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hunt.',
                    error: err
                });
            }
            return res.json(hunts);
        });
    },

    /**
     * huntController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        huntModel.findOne({_id: id}, function (err, hunt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hunt.',
                    error: err
                });
            }
            if (!hunt) {
                return res.status(404).json({
                    message: 'No such hunt'
                });
            }
            return res.json(hunt);
        });
    },

    /**
     * huntController.create()
     */
    create: function (req, res) {
        var hunt = new huntModel({
			title : req.body.title,
			displayable_name : req.body.displayable_name,
			description : req.body.description,
			publication_date : req.body.publication_date,
			num_of_completions : req.body.num_of_completions,
			num_of_downloads : req.body.num_of_downloads,
      user_id : req.body.user_id

        });

        hunt.save(function (err, hunt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating hunt',
                    error: err
                });
            }
            return res.status(201).json(hunt);
        });
    },

    /**
     * huntController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        huntModel.findOne({_id: id}, function (err, hunt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting hunt',
                    error: err
                });
            }
            if (!hunt) {
                return res.status(404).json({
                    message: 'No such hunt'
                });
            }

            hunt.title = req.body.title ? req.body.title : hunt.title;
			hunt.displayable_name = req.body.displayable_name ? req.body.displayable_name : hunt.displayable_name;
			hunt.description = req.body.description ? req.body.description : hunt.description;
			hunt.publication_date = req.body.publication_date ? req.body.publication_date : hunt.publication_date;
			hunt.num_of_completions = req.body.num_of_completions ? req.body.num_of_completions : hunt.num_of_completions;
			hunt.num_of_downloads = req.body.num_of_downloads ? req.body.num_of_downloads : hunt.num_of_downloads;
			
            hunt.save(function (err, hunt) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating hunt.',
                        error: err
                    });
                }

                return res.json(hunt);
            });
        });
    },

    /**
     * huntController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        huntModel.findByIdAndRemove(id, function (err, hunt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the hunt.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },

    removedangerously: function (req, res) {
        var id = req.params.id;
        huntModel.findByIdAndRemove(id, function (err, hunt) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the hunt.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
