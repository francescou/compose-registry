'use strict';


/**
 * find docker compose stacks
 * find compose stacks by keywords
 *
 * query String keywords
 * returns List
 **/
exports.search = function(query) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "content" : "content"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

