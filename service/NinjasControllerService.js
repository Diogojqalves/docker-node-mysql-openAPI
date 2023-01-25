'use strict';
var sql = require('../utils/db.js');

/**
 * Create 
 *
 * 
 **/
exports.createNinja = function (body) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO ninja (name, village) Values(?,?)", [body.name, body.village], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
};

/**
 * Delete 
 *
 * id Long
 * no response value expected for this operation
 **/
exports.deleteNinja = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('DELETE FROM ninja WHERE id = ?', [id], function (err, res) {
      if (err || !res.affectedRows) {
        console.log(err);
        console.log(res);
        reject();
      } else {
        console.log(res);
        resolve({deleted: id});
      }
    });
  });
};

/**
 * Retrieve 
 *
 * id Long
 * returns
 **/
exports.retrieveNinja = function (id) {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM ninja WHERE id = ?', [id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res[0]);
      }
    });
  });
};

/**
 * Retrieve ninjas
 *
 * returns List
 **/
exports.retrieveNinjas = function () {
  return new Promise(function (resolve, reject) {
    sql.query('SELECT * FROM ninja', function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
};

/**
 * Update
 *
 * body 
 * id Long
 * no response value expected for this operation
 **/
exports.updateNinja = function (body, id) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    sql.query('UPDATE ninja set name = ?, village = ? WHERE id = ?', [body.name, body.village, id], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(res);
        resolve(id);
      }
    });
  });
};
