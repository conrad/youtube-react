/** jsx React.DOM */

var React = require('react');
var Uploader = require('./uploader/Uploader');
var Main = require('./main/Main');
var AppStore = require('../stores/AppStore');

var Router = require('react-router');     // or ReactRouter in browsers
var RouteHandler = Router.RouteHandler;


var AppRouter = React.createClass({

  // There should be some state here that we could pass down either to uploader or main, but currently it's all in Main component
  render: function() {
    return (
      <div className="app-main">
        <RouteHandler />
      </div>
    );
  }
})

module.exports = AppRouter;
