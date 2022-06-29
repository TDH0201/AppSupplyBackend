//SPDX-License-Identifier: Apache-2.0

var tuna = require('./controller/controllerTuna.js');
var user = require('./controller/controllerUser.js');

module.exports = function(app){

  app.get('/get_tuna/:id', function(req, res){
    tuna.get_tuna(req, res);
  });
  
  app.get('/add_tuna/:tuna', function(req, res){
    tuna.add_tuna(req, res);
  });

  app.get('/get_all_tuna', function(req, res){
    tuna.get_all_tuna(req, res);
  });

  app.get('/change_holder/:holder', function(req, res){
    tuna.change_holder(req, res);
  });

  //user
  app.get('/get_all_user', function(req, res){
    user.get_all_user(req, res);
  });
  app.get('/get_user/:id', function(req, res){
    user.get_user(req, res);
  });

}
