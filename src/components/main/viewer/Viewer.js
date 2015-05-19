var React = require('react');
var Video = require('./Video');


var Viewer = React.createClass({

  componentDidMount: function() {
    console.log('Viewer component mounted!');
    console.log('Viewer props:', this.props);
  },


  render: function() {
    return (
      <div className='viewer'>
        <Video  />
      </div>
    );
  }

});

module.exports = Viewer;