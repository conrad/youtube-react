// AppDispatcher.js

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',  //as opposed to SERVER_ACTION, if originating from server
    action: action
  });
};

module.exports = AppDispatcher;

