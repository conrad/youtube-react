var React = require('react');
var Videos = require('./Videos');

var List = React.createClass({

  componentDidMount: function() {
    console.log('List component mounted!');
    console.log('List props:', this.props);
    console.log('List props.params:', this.props.params);
  },

  render: function() {
    return (
      <div> 
        <Videos videos={this.props.videos} />
      </div>
    );
  }

});

module.exports = List;