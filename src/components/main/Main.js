/** jsx React.DOM */

var React = require('react');
var Header = require('./Header');
var Videos = require('./Videos');
var Store = require('../../stores/AppStore');

function getState() {
  return {
    videos: AppStore.getData().videos,
    searchText: AppStore.getData().searchText
    // getData() returns an object with property videos
  };
}

var Main = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return ({     //Store.getData();
      videos: [],
      searchText: ''
    })  
  },

  // Because of the data binding provided by ReactFire, any changes to Firebase will be reflected in realtime to this.state.
  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    AppStore.removeChangeListenter(this._onChange);
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
  },

  _onChange: function(){
    this.setState(getState());
  }

});

module.exports = Main;