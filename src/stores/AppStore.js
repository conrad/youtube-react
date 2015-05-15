// AppStore.js

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  videos: [
    {
      id: 0,
      title: "Dog Sneezing",
      author: "Rover Hendrix",
      url: 'https://www.youtube.com/watch?v=829os-2BQBM',
      views: 10000000,
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      id: 1,
      title: "Philip Seymour Hoffman Laughing",
      author: "Tom Cruise",
      url: 'https://www.youtube.com/watch?v=vq_pjh1y2Ec',
      views: 19999999990000,
      date: '2012-04-23T18:25:43.511Z'
    },
    {
      id: 2,
      title: "Top 10 Soccer Goals",
      author: "Pele",
      url: 'https://www.youtube.com/watch?v=rYZW_ujLH40',
      views: 10000023400,
      date: '2012-04-23T18:25:43.511Z'
    }
  ],
  searchText: ''
};

var addVideo = function(vidObject){

};

var deleteVideo = function(vidId){

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


