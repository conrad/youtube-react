var React = require('react');
var Router = require('react-router'); // or ReactRouter in browsers
var Uploader = require('./uploader/Uploader');
var Main = require('./main/Main');



var routes = (
  <Route name="app" path="/" handler={App}>  // handler???
    <Route name="uploader" handler={Uploader}/>
    // <Route name="viewer" path=":videoId" handler={Viewer}/>
    <DefaultRoute handler={Main}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});