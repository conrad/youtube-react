/** jsx React.DOM */

var React = require('react');
var Header = require('./Header');
var Videos = require('./Videos');
var Store = require('../stores/AppStore');

var Main = React.createClass({

  mixins: [ReactFireMixin],
  getInitialState: function() {
    return ({             // Store.getData();
      videos: [],
      searchText: ''
    })  
  },

  // Because of the data binding provided by ReactFire, any changes to Firebase will be reflected in realtime to this.state.
  componentWillMount: function() {
    this.bindAsArray(new Firebase("https://react-video.firebaseio.com/videos/"), "videos");
  },

  handleSearch: function() {
    
  },

  render: function() {
    return (
      <div className='container'>
        <Header searchText={this.state.searchText} onSearchSubmit={this.handleSearch} />
        <Videos videos={this.state.videos} />
      </div>

    );
  }

});

module.exports = Main;