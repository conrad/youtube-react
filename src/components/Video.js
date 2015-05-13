var React = require('react');

var Video = React.createClass({

  render: function() {
    return (
      <li>
      
        <p>{this.props.title} <a href={this.props.url} /> </p>
        <p>by {this.props.author}</p>
        <p>View: {this.props.views} - {this.props.date}</p>
      </li>
    );
  }

});

module.exports = Video;