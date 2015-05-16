var React = require('react');

var Video = React.createClass({

  render: function() {
    
    var url = this.props.data.url.replace("watch?v=", "v/");

    return (
      <li>
        <iframe title="YouTube video player"  type="text/html" 
        width="640" height="390" src={url} 
        frameBorder="0" allowFullScreen></iframe>
        <p>{this.props.data.title} <a href={this.props.data.url} /> </p>
        <p>by {this.props.data.author}</p>
        <p>View: {this.props.data.views} - {this.props.data.date}</p>
      </li>
    );
  }

});

module.exports = Video;