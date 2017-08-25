'use strict';

var glob = require("glob");
var base64 = require('base-64');
var fs = require('fs');
var _ = require("lodash");

var Writer = require('../utils/writer');

var PATH = "/projects/";
var FILENAME = "docker-compose.yml";

var ymls = {};

function keywords(s) {
  return _.chain(s.split(/[^a-zA-Z09]/g))
    .filter(s => s.length > 0)
    .map(s => s.toLowerCase())
    .value()
    .sort();
}

function clean(path) {
  return path.substring(PATH.length, path.length - FILENAME.length - 1);
}

glob(PATH + "**/" + FILENAME, {}, function (er, files) {

  _.each(files, path => {
    const name = clean(path);
    const id = base64.encode(name);
    ymls[id] = {
      path: path,
      keywords: keywords(name)
    };
  });

  console.log(Object.keys(ymls).length + ' projects indexed');

});

function search(query) {
  const results = _.filter(ymls, item => {
    return _.every(keywords(query), k => {
      return _.sortedIndexOf(item.keywords, k) >= 0;
    });
  });

  return _.map(results, result => {
    var name = clean(result.path);
    return {
      name: name,
      id: base64.encode(name),
    };
  });
}


function yml(id, resolve, reject) {
  if (!ymls[id]) {
    return reject(Writer.respondWithCode(404));
  }
  var p = ymls[id].path;
  fs.readFile(p, 'utf8', function (err,data) {
    if (err) {
      return reject(Writer.respondWithCode(500));
    }
    resolve({content: data});
  });

}


module.exports = {
  yml: yml,
  search: search
};
