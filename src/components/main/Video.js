var React = require('react');
var Link = require('react-router-component').Link;
var Video = React.createClass({

  render: function() {
    
    var url = this.props.data.url.replace("watch?v=", "v/");
    var src = "http://" + this.props.data.image;
    return (
      <li>
        <Link href="/viewer" videoId={this.props.data.url}>
          <img className='thumbnail' src={src}/>
        </Link>
        <a href='#'>
          <p>{this.props.data.title} <a href={this.props.data.url} /> </p>
        </a>
        <p>by {this.props.data.author}</p>
        <p>View: {this.props.data.views} - {this.props.data.date}</p>
      </li>
    );
  }

});

module.exports = Video;