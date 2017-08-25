'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.search = function search (req, res, next) {
  var query = req.swagger.params['query'].value;
  Default.search(query)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.yml = function yml (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.yml(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
