var React = require('react');
var AppRouter = require('./components/AppRouter');
var Uploader = require('./components/uploader/Uploader');
var Main = require('./components/main/Main');

var Router = require('react-router');     // or ReactRouter in browsers
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route name="app" path="/" handler={AppRouter}>     
    <Route name="uploader" handler={Uploader}/>
    <DefaultRoute handler={Main}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});