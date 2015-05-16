// AppStore.js

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  videos: [],
  searchText: ''
};

// create reference to Firebase videos object
var fireVideosRef = new Firebase('https://react-video.firebaseio.com/videos/');
fireVideosRef.on('child_added', function(videos) {
  _store.videos = videos;
});

// var loadVideos = function() {
//   _store.videos = new Firebase('https://react-video.firebaseio.com/videos/');
// }

var addVideo = function(vidObject){
  fireVideosRef.push(vidObject);
};

var deleteVideo = function(vidId){
  // vidId must match the ID/index of the video being deleted
  var vidRef = new Firebase('https://react-video.firebaseio.com/videos/' + vidId);
  vidRef.remove();
};

// This AppStore object emits changes made and allows components to access to the store only to GET its data
var AppStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListenter: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },
  getData: function() {
    // loadVideos();
    return _store;
  },

});

module.exports = AppStore;

// The Dispatcher allows components to trigger changes to the store (invokes setters)
AppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.actionType){
    case AppConstants.UPLOAD_VIDEO:
      addVideo(vidObject);
      AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.REMOVE_VIDEO:
      deleteVideo(vidId);
      AppStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});


