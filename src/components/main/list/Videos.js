var React = require('react');
var Video = require('./Video');

var Videos = React.createClass({


  render: function() {
    
    var list = this.props.videos.map(function(vid){
      return <Video data={vid} />;
    });
    return (
      <div> 
        <ul>
          {list}
        </ul>
      </div>
    );
  }

});

module.exports = Videos;