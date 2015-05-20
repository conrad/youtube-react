/** @jsx React.DOM */
var React = require('react');
var Viewer = require('./video/Viewer');
var Main = require('./main/Main');
var Router = require('react-router-component');
var Template = require('./app-template');

var NotFound = Router.NotFound;
var Locations = Router.Locations;
var Location = Router.Location;

var MainRouter = React.createClass({
  render: function() {
    return (
      <Template>
        <Locations>
          <Location path="/" handler={Main} />
          <Location path="/viewer" handler={Viewer} foo="bar"/>
          <NotFound handler={Main} />
        </Locations>
      </Template>

    );
  }

});

module.exports = MainRouter;