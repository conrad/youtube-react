var React = require('react');

var List = React.createClass({

  componentDidMount: function() {
    console.log('List component mounted!');
    console.log('List props:', this.props);
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