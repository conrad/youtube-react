var React = require('react');
var AppRouter = require('./components/AppRouter');
var Uploader = require('./components/uploader/Uploader');
var Main = require('./components/main/Main');
var List = require('./components/main/list/List');
var Viewer = require('./components/main/viewer/Viewer');

var Router = require('react-router');     // or ReactRouter in browsers
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route name="app" handler={AppRouter}>
    <Route name="uploader" path="uploader" handler={Uploader}/>
    <Route name="main" handler={Main}>
      <Route name="list" path="/" handler={List}/>
      <Route name="viewer" path=":videoId" handler={Viewer}/>
    </Route>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});