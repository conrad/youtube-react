// AppActions.js

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addVideo: function(vidObject){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPLOAD_VIDEO,
      data: vidObject
    });
  },
  deleteVideo: function (vidId) {
    AppDispatcher.handleAction({
      actionType: AppConstants.REMOVE_VIDEO,
      data: vidId
    });
  }
};

module.exports = AppActions;
