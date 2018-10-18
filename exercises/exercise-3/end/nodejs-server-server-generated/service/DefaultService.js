"use strict";

/**
 * Searches for activities of an edition
 *
 * editionId String Year of the hosted edition
 * searchString String pass an optional search string for looking up activities (optional)
 * returns List
 **/
exports.editionsEditionIdActivitiesGET = function(editionId, searchString) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        speakers: [
          {
            twitterAccount: "@nanovazquez87",
            imageUrl:
              "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/vazquez-on.jpg",
            name: "Mariano Vazquez",
            description: "Tech Lead @ Mulesoft",
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            githubAccount: "@nanovazquez87"
          },
          {
            twitterAccount: "@nanovazquez87",
            imageUrl:
              "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/vazquez-on.jpg",
            name: "Mariano Vazquez",
            description: "Tech Lead @ Mulesoft",
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            githubAccount: "@nanovazquez87"
          }
        ],
        name: "Design First APIs with OAS",
        description: "Workshop to learn how to design APIs with Swagger/OpenAPI",
        startTime: "2018-10-18T19:30:00Z",
        id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
        endTime: "2018-10-18T20:00Z",
        type: "talk"
      },
      {
        speakers: [
          {
            twitterAccount: "@nanovazquez87",
            imageUrl:
              "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/vazquez-on.jpg",
            name: "Mariano Vazquez",
            description: "Tech Lead @ Mulesoft",
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            githubAccount: "@nanovazquez87"
          },
          {
            twitterAccount: "@nanovazquez87",
            imageUrl:
              "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/vazquez-on.jpg",
            name: "Mariano Vazquez",
            description: "Tech Lead @ Mulesoft",
            id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
            githubAccount: "@nanovazquez87"
          }
        ],
        name: "Design First APIs with OAS",
        description: "Workshop to learn how to design APIs with Swagger/OpenAPI",
        startTime: "2018-10-18T19:30:00Z",
        id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
        endTime: "2018-10-18T20:00Z",
        type: "talk"
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Adds feedback to an activity
 *
 * editionId String Year of the hosted edition
 * activityId UUID The ID of the activity
 * username String Name of the user
 * rating Integer Rating provided
 * returns Feedback
 **/
exports.editionsEditionIdFeedbackPOST = function(editionId, activityId, username, rating) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      activityId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      rating: 0,
      id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      username: "John Doe"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieves the speakers
 *
 * editionId String Year of the hosted edition
 * returns List
 **/
exports.editionsEditionIdSpeakersGET = function(editionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        id: "a290f1ee-6c54-4b01-90e6-d701748f0851",
        name: "Suz Hinton",
        description: "Cloud Developer Advocate @ Microsoft",
        imageUrl: "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/suz-on.jpg"
      },
      {
        id: "b290f1ee-6c54-4b01-90e6-d701748f0851",
        name: "Dan Shaw",
        description: "Strategic Advisor",
        imageUrl: "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/dan-on.jpg"
      },
      {
        id: "c290f1ee-6c54-4b01-90e6-d701748f0851",
        name: "Franziska Hinkelman",
        description: "Co-creator of the Beaker Browser",
        imageUrl: "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/fran-on.jpg"
      },
      {
        id: "d290f1ee-6c54-4b01-90e6-d701748f0851",
        name: "Tara Vancil",
        description: "Cloud Developer Advocate @ Microsoft",
        imageUrl: "//raw.githubusercontent.com/nodeconfar/2018-website/gh-pages/assets/images/speakers/tara-on.jpg"
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
