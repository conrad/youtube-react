/** jsx React.DOM */

var React = require('react');
var Header = require('./Header');
var Videos = require('./Videos');
var Store = require('../stores/AppStore');

var Main = React.createClass({

  getInitialState: function() {
    return Store.getData();
  },



        // <Header searchText={this.state.searchText} />
  render: function() {
    return (
      <div className='container'>
        <Videos videos={this.state.videos} />
      </div>

    );
  }

});

module.exports = Main;