'use strict';

var RegistryService = require('./RegistryService');

/**
 * find docker compose stacks
 * find compose stacks by keywords
 *
 * query String keywords
 * returns List
 **/
exports.search = function(query) {
  return new Promise(function(resolve, reject) {
    resolve({items: RegistryService.search(query)});
  });
}


/**
 * get yml
 * get yml
 *
 * id String composition id
 * returns yml_response
 **/
exports.yml = function(id) {
  return new Promise(function(resolve, reject) {
    RegistryService.yml(id, resolve, reject);
  });
}

