"use strict";
/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * NodeConf API
 * This is the API for the NodeConf AR 2018
 *
 * OpenAPI spec version: 1.0.0
 * Contact: hello@nodeconf.com.ar
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const portableFetch = require("portable-fetch");
const BASE_PATH = "https://virtserver.swaggerhub.com/nodeconf18-api-spec/nodeconf-api/1.0.0".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = BASE_PATH, fetch = portableFetch) {
        this.basePath = basePath;
        this.fetch = fetch;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
    }
}
exports.RequiredError = RequiredError;
/**
 * @export
 * @namespace Activity
 */
var Activity;
(function (Activity) {
    /**
     * @export
     * @enum {string}
     */
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Talk"] = 'talk'] = "Talk";
        TypeEnum[TypeEnum["Workshop"] = 'workshop'] = "Workshop";
        TypeEnum[TypeEnum["Keynote"] = 'keynote'] = "Keynote";
        TypeEnum[TypeEnum["Break"] = 'break'] = "Break";
        TypeEnum[TypeEnum["Lunch"] = 'lunch'] = "Lunch";
        TypeEnum[TypeEnum["Raffle"] = 'raffle'] = "Raffle";
    })(TypeEnum = Activity.TypeEnum || (Activity.TypeEnum = {}));
})(Activity = exports.Activity || (exports.Activity = {}));
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
exports.DefaultApiFetchParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Searches for activities of an edition
         * @param {string} editionId Year of the hosted edition
         * @param {string} [searchString] pass an optional search string for looking up activities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdActivitiesGet(editionId, searchString, options = {}) {
            // verify required parameter 'editionId' is not null or undefined
            if (editionId === null || editionId === undefined) {
                throw new RequiredError('editionId', 'Required parameter editionId was null or undefined when calling editionsEditionIdActivitiesGet.');
            }
            const localVarPath = `/editions/{editionId}/activities`
                .replace(`{${"editionId"}}`, encodeURIComponent(String(editionId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (searchString !== undefined) {
                localVarQueryParameter['searchString'] = searchString;
            }
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Adds feedback to an activity
         * @param {string} editionId Year of the hosted edition
         * @param {string} activityId The ID of the activity
         * @param {string} username Name of the user
         * @param {number} rating Rating provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options = {}) {
            // verify required parameter 'editionId' is not null or undefined
            if (editionId === null || editionId === undefined) {
                throw new RequiredError('editionId', 'Required parameter editionId was null or undefined when calling editionsEditionIdFeedbackPost.');
            }
            // verify required parameter 'activityId' is not null or undefined
            if (activityId === null || activityId === undefined) {
                throw new RequiredError('activityId', 'Required parameter activityId was null or undefined when calling editionsEditionIdFeedbackPost.');
            }
            // verify required parameter 'username' is not null or undefined
            if (username === null || username === undefined) {
                throw new RequiredError('username', 'Required parameter username was null or undefined when calling editionsEditionIdFeedbackPost.');
            }
            // verify required parameter 'rating' is not null or undefined
            if (rating === null || rating === undefined) {
                throw new RequiredError('rating', 'Required parameter rating was null or undefined when calling editionsEditionIdFeedbackPost.');
            }
            const localVarPath = `/editions/{editionId}/feedback`
                .replace(`{${"editionId"}}`, encodeURIComponent(String(editionId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            const localVarFormParams = new url.URLSearchParams();
            if (activityId !== undefined) {
                localVarFormParams.set('activityId', activityId);
            }
            if (username !== undefined) {
                localVarFormParams.set('username', username);
            }
            if (rating !== undefined) {
                localVarFormParams.set('rating', rating);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            localVarRequestOptions.body = localVarFormParams.toString();
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Retrieves the speakers
         * @param {string} editionId Year of the hosted edition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdSpeakersGet(editionId, options = {}) {
            // verify required parameter 'editionId' is not null or undefined
            if (editionId === null || editionId === undefined) {
                throw new RequiredError('editionId', 'Required parameter editionId was null or undefined when calling editionsEditionIdSpeakersGet.');
            }
            const localVarPath = `/editions/{editionId}/speakers`
                .replace(`{${"editionId"}}`, encodeURIComponent(String(editionId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
exports.DefaultApiFp = function (configuration) {
    return {
        /**
         *
         * @summary Searches for activities of an edition
         * @param {string} editionId Year of the hosted edition
         * @param {string} [searchString] pass an optional search string for looking up activities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdActivitiesGet(editionId, searchString, options) {
            const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).editionsEditionIdActivitiesGet(editionId, searchString, options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @summary Adds feedback to an activity
         * @param {string} editionId Year of the hosted edition
         * @param {string} activityId The ID of the activity
         * @param {string} username Name of the user
         * @param {number} rating Rating provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options) {
            const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
        /**
         *
         * @summary Retrieves the speakers
         * @param {string} editionId Year of the hosted edition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdSpeakersGet(editionId, options) {
            const localVarFetchArgs = exports.DefaultApiFetchParamCreator(configuration).editionsEditionIdSpeakersGet(editionId, options);
            return (fetch = portableFetch, basePath = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    }
                    else {
                        throw response;
                    }
                });
            };
        },
    };
};
/**
 * DefaultApi - factory interface
 * @export
 */
exports.DefaultApiFactory = function (configuration, fetch, basePath) {
    return {
        /**
         *
         * @summary Searches for activities of an edition
         * @param {string} editionId Year of the hosted edition
         * @param {string} [searchString] pass an optional search string for looking up activities
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdActivitiesGet(editionId, searchString, options) {
            return exports.DefaultApiFp(configuration).editionsEditionIdActivitiesGet(editionId, searchString, options)(fetch, basePath);
        },
        /**
         *
         * @summary Adds feedback to an activity
         * @param {string} editionId Year of the hosted edition
         * @param {string} activityId The ID of the activity
         * @param {string} username Name of the user
         * @param {number} rating Rating provided
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options) {
            return exports.DefaultApiFp(configuration).editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options)(fetch, basePath);
        },
        /**
         *
         * @summary Retrieves the speakers
         * @param {string} editionId Year of the hosted edition
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editionsEditionIdSpeakersGet(editionId, options) {
            return exports.DefaultApiFp(configuration).editionsEditionIdSpeakersGet(editionId, options)(fetch, basePath);
        },
    };
};
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
class DefaultApi extends BaseAPI {
    /**
     *
     * @summary Searches for activities of an edition
     * @param {} editionId Year of the hosted edition
     * @param {} [searchString] pass an optional search string for looking up activities
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    editionsEditionIdActivitiesGet(editionId, searchString, options) {
        return exports.DefaultApiFp(this.configuration).editionsEditionIdActivitiesGet(editionId, searchString, options)(this.fetch, this.basePath);
    }
    /**
     *
     * @summary Adds feedback to an activity
     * @param {} editionId Year of the hosted edition
     * @param {} activityId The ID of the activity
     * @param {} username Name of the user
     * @param {} rating Rating provided
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options) {
        return exports.DefaultApiFp(this.configuration).editionsEditionIdFeedbackPost(editionId, activityId, username, rating, options)(this.fetch, this.basePath);
    }
    /**
     *
     * @summary Retrieves the speakers
     * @param {} editionId Year of the hosted edition
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    editionsEditionIdSpeakersGet(editionId, options) {
        return exports.DefaultApiFp(this.configuration).editionsEditionIdSpeakersGet(editionId, options)(this.fetch, this.basePath);
    }
}
exports.DefaultApi = DefaultApi;
