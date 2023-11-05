'use strict';

/**
 * bike-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bike-model.bike-model');
