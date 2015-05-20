/** jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/AppStore');
var Video = require('./Video');
var Header = require('../main/Header');

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
    console.log("IN VIEWER")
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
        <Video/>
      </div>

    );
  },

  _onChange: function(){
    this.setState(getState());
  }

});

module.exports = Main;