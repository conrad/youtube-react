/** jsx React.DOM */

var React = require('react');

var SearchBar = React.createClass({

  onSearchSubmit: function(e) {

  },

  render: function() {
    return (
      <div className="searchBar">
        <form className="searchForm">
          <input className="textBox" type="text" placeholder="Search Videos..." ref="search" onSubmit={this.onSearchSubmit} />
          <button className="searchButton" type="submit">Search</button>
        </form>
      </div>
    );
  }

});

module.exports = SearchBar;