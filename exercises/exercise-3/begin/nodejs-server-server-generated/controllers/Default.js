'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.editionsEditionIdActivitiesGET = function editionsEditionIdActivitiesGET (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  var searchString = req.swagger.params['searchString'].value;
  Default.editionsEditionIdActivitiesGET(editionId,searchString)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editionsEditionIdFeedbackPOST = function editionsEditionIdFeedbackPOST (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  var activityId = req.swagger.params['activityId'].value;
  var username = req.swagger.params['username'].value;
  var rating = req.swagger.params['rating'].value;
  Default.editionsEditionIdFeedbackPOST(editionId,activityId,username,rating)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editionsEditionIdSpeakersGET = function editionsEditionIdSpeakersGET (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  Default.editionsEditionIdSpeakersGET(editionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
