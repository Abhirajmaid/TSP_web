'use strict';

/**
 * bike-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bike-listing.bike-listing');
