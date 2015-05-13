var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div className='header'>
        <img className='logo' src="https://pmcvariety.files.wordpress.com/2014/07/youtube-logo-full_color.jpg?w=670&h=377&crop=1" height="20px" width="40px" />
        <Nav />
        <SearchBar searchText={this.props.searchText} />
      </div>


    );
  }

});

module.exports = Header;


