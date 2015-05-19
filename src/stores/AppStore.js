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
  // console.log('data from child added:', videos.val());
  _store.videos.push(videos.val());
  // console.log('Now _store is:', _store);
  AppStore.emit(CHANGE_EVENT);
});

var addVideo = function(vidObject){
  fireVideosRef.push(vidObject);
  AppStore.emit(CHANGE_EVENT);
};

var deleteVideo = function(vidId){
  // vidId must match the ID/index of the video being deleted
  var vidRef = new Firebase('https://react-video.firebaseio.com/videos/' + vidId);
  vidRef.child(vidId).remove();
};

// This AppStore object emits changes made and allows components to access to the store only to GET its data
var AppStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
    // this.addListener(CHANGE_EVENT, cb);
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
      addVideo(vidObject);     // AppStore.emit(CHANGE_EVENT);
      break;
    case AppConstants.REMOVE_VIDEO:
      deleteVideo(vidId);      // AppStore.emit(CHANGE_EVENT);
      break;
    // default:      // return true;
  }
  AppStore.emit(CHANGE_EVENT);
  return true;
});





// Initial data:
// author: "Pele"
// date: "2012-04-23T18:25:43.511Z"
// title: "Top 10 Soccer Goals"
// url: "https://www.youtube.com/watch?v=rYZW_ujLH40"
// views: 10000023400

// author: "Rover Hendrix"
// date: "2012-04-23T18:25:43.511Z"
// title: "Dog Sneezing"
// url: "https://www.youtube.com/watch?v=829os-2BQBM"
// views: 10000000

// author: "Tom Cruise"
// date: "2012-04-23T18:25:43.511Z"
// title: "Philip Seymour Hoffman Laughing"
// url: "https://www.youtube.com/watch?v=vq_pjh1y2Ec"
// views: 19999999990000
