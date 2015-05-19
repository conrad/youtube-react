var React = require('react');
var Video = require('./Video');

var Videos = React.createClass({


  render: function() {
    
    // var list = this.props.videos.map(function(vid){
    //   return <Video data={vid} />;
          // {list}
    // });
    return (
      <div> 
        <ul>
        </ul>
      </div>
    );
  }

});

module.exports = Videos;