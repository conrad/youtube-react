/** jsx React.DOM */

var React = require('react');

var SearchBar = React.createClass({

  onSearchSubmit: function(e) {

  },

  render: function() {
    return (
      <div className="searchBar">
        <form>
          <input type="text" placeholder="Search Videos..." ref="search" onSubmit={this.onSearchSubmit} />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

});

module.exports = SearchBar;