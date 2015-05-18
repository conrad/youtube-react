var React = require('react');

var Video = React.createClass({

  render: function() {
    
    var url = this.props.data.url.replace("watch?v=", "v/");
    var src = "http://" + this.props.data.image;
    return (
      <li>
        <a href='#'>
          <img className='thumbnail' src={src} />
        </a>
        <p>{this.props.data.title} <a href={this.props.data.url} /> </p>
        <p>by {this.props.data.author}</p>
        <p>View: {this.props.data.views} - {this.props.data.date}</p>
      </li>
    );
  }

});

module.exports = Video;