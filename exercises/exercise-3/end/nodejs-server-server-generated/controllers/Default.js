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

module.exports.editionsEditionIdAgendaGET = function editionsEditionIdAgendaGET (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  var type = req.swagger.params['type'].value;
  Default.editionsEditionIdAgendaGET(editionId,type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editionsEditionIdFeedbackGET = function editionsEditionIdFeedbackGET (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  var searchString = req.swagger.params['searchString'].value;
  Default.editionsEditionIdFeedbackGET(editionId,searchString)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editionsEditionIdFeedbackPOST = function editionsEditionIdFeedbackPOST (req, res, next) {
  var editionId = req.swagger.params['editionId'].value;
  var ownerName = req.swagger.params['ownerName'].value;
  var description = req.swagger.params['description'].value;
  Default.editionsEditionIdFeedbackPOST(editionId,ownerName,description)
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
