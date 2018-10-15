'use strict';


/**
 * Searches for activities of the event
 * Can search for activities given throughout the event
 *
 * editionId Integer Year of the hosted edition
 * searchString String pass an optional search string for looking up activities (optional)
 * returns List
 **/
exports.editionsEditionIdActivitiesGET = function(editionId,searchString) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Coding Challenge",
  "description" : "Coding challenge to be done in the break room at 10:30am",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "challenge"
}, {
  "name" : "Coding Challenge",
  "description" : "Coding challenge to be done in the break room at 10:30am",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "challenge"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Searches events on the agenda
 * Can search for all events on the agenda, or filter by type
 *
 * editionId Integer Year of the hosted edition
 * type String pass an optional type to filter the events (optional)
 * returns List
 **/
exports.editionsEditionIdAgendaGET = function(editionId,type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Lightning Talk",
  "description" : "Lightning talk about using OAS",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "lightning-talk"
}, {
  "name" : "Lightning Talk",
  "description" : "Lightning talk about using OAS",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "type" : "lightning-talk"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves all feedbacks comments
 *
 * editionId Integer Year of the hosted edition
 * searchString String pass an optional search string for looking up feedbacks comments (optional)
 * returns List
 **/
exports.editionsEditionIdFeedbackGET = function(editionId,searchString) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "John Doe",
  "description" : "First time at the NodeConfJS. This rocks!",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
}, {
  "name" : "John Doe",
  "description" : "First time at the NodeConfJS. This rocks!",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * uploads a feedback comment
 *
 * editionId Integer Year of the hosted edition
 * ownerName String Name of the feedback comment creator
 * description String Feedback comment content description
 * returns Feedback
 **/
exports.editionsEditionIdFeedbackPOST = function(editionId,ownerName,description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "John Doe",
  "description" : "First time at the NodeConfJS. This rocks!",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieves the speakers
 *
 * editionId Integer Year of the hosted edition
 * returns List
 **/
exports.editionsEditionIdSpeakersGET = function(editionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "twitterAccount" : "@john-doe",
  "imageUrl" : "http://some.image.com/image.png",
  "name" : "John Doe",
  "description" : "Node JS Developer",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "githubAccount" : "@i-am-a-developer"
}, {
  "twitterAccount" : "@john-doe",
  "imageUrl" : "http://some.image.com/image.png",
  "name" : "John Doe",
  "description" : "Node JS Developer",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "githubAccount" : "@i-am-a-developer"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

