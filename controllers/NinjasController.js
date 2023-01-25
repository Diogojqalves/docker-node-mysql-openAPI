'use strict';

var utils = require('../utils/writer.js');
var NinjasController = require('../service/NinjasControllerService');

module.exports.createNinja = function createNinja(req, res, next, body) {
  NinjasController.createNinja(body)
    /* We know that NinjasController.createNinja on success calls resolve(<id of inserted object>), 
    NinjasController.retrieveNinja the <id of object> as argument. */
    .then(NinjasController.retrieveNinja) 
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNinja = function deleteNinja(req, res, next, id) {
  NinjasController.deleteNinja(id)
    .then(function (response) {
      utils.writeJson(res, response, 204);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveNinja = function retrieveNinja(req, res, next, id) {
  NinjasController.retrieveNinja(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveNinjas = function retrieveNinjas(req, res, next) {
  NinjasController.retrieveNinjas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNinja = function updateNinja(req, res, next, body, id) {
  NinjasController.updateNinja(body, id)
    .then(NinjasController.retrieveNinja)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
