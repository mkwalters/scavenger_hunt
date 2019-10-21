var clueModel = require('../models/clueModel.js');

/**
 * clueController.js
 *
 * @description :: Server-side logic for managing clues.
 */
module.exports = {

    /**
     * clueController.list()
     */
    list: function (req, res) {
        clueModel.find(function (err, clues) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clue.',
                    error: err
                });
            }
            return res.json(clues);
        });
    },

    /**
     * clueController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        clueModel.findOne({_id: id}, function (err, clue) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clue.',
                    error: err
                });
            }
            if (!clue) {
                return res.status(404).json({
                    message: 'No such clue'
                });
            }
            return res.json(clue);
        });
    },

    /**
     * clueController.create()
     */
    create: function (req, res) {
        var clue = new clueModel({
			sequence_number : req.body.sequence_number,
			question : req.body.question,
			answer : req.body.answer,
			possible_answers : req.body.possible_answers,
			latitude : req.body.latitude,
			longitude : req.body.longitude,
			geo_range : req.body.geo_range,
			clue_text : req.body.clue_text,
			completion_message : req.body.completion_message
      hunt_id : req.body.hunt_id

        });

        clue.save(function (err, clue) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating clue',
                    error: err
                });
            }
            return res.status(201).json(clue);
        });
    },

    /**
     * clueController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        clueModel.findOne({_id: id}, function (err, clue) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting clue',
                    error: err
                });
            }
            if (!clue) {
                return res.status(404).json({
                    message: 'No such clue'
                });
            }

            clue.sequence_number = req.body.sequence_number ? req.body.sequence_number : clue.sequence_number;
			clue.question = req.body.question ? req.body.question : clue.question;
			clue.answer = req.body.answer ? req.body.answer : clue.answer;
			clue.possible_answers = req.body.possible_answers ? req.body.possible_answers : clue.possible_answers;
			clue.latitude = req.body.latitude ? req.body.latitude : clue.latitude;
			clue.longitude = req.body.longitude ? req.body.longitude : clue.longitude;
			clue.geo_range = req.body.geo_range ? req.body.geo_range : clue.geo_range;
			clue.clue_text = req.body.clue_text ? req.body.clue_text : clue.clue_text;
			clue.completion_message = req.body.completion_message ? req.body.completion_message : clue.completion_message;
			
            clue.save(function (err, clue) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating clue.',
                        error: err
                    });
                }

                return res.json(clue);
            });
        });
    },

    /**
     * clueController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        clueModel.findByIdAndRemove(id, function (err, clue) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the clue.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    },
  
    removedangerously: function (req, res) {
        var id = req.params.id;
        clueModel.findByIdAndRemove(id, function (err, clue) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the clue.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
