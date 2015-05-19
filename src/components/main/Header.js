/** jsx React.DOM */

var React = require('react');
var SearchBar = require('./SearchBar');

var Router = require('react-router'); // or var Router = ReactRouter; in browsers
// var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var Header = React.createClass({

        // <Nav />
  render: function() {
    return (
      <div className='header'>
        <img className='logo' src="https://pmcvariety.files.wordpress.com/2014/07/youtube-logo-full_color.jpg?w=670&h=377&crop=1" />
        <SearchBar searchText={this.props.searchText} onSearchSubmit={this.props.HandleSearch} />
        <button className="uploadButton" ><Link to='uploader'>Upload</Link></button>
      </div>


    );
  }

});

module.exports = Header;


