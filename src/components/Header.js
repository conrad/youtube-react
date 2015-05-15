/** jsx React.DOM */

var React = require('react');
var SearchBar = require('./SearchBar');

var Header = React.createClass({

        // <Nav />
  render: function() {
    return (
      <div className='header'>
        <img className='logo' src="https://pmcvariety.files.wordpress.com/2014/07/youtube-logo-full_color.jpg?w=670&h=377&crop=1" />
        <SearchBar searchText={this.props.searchText} onSearchSubmit={this.props.HandleSearch} />
      </div>


    );
  }

});

module.exports = Header;


