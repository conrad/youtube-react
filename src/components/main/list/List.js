var React = require('react');

var List = React.createClass({

  render: function() {
    return (
      <div> 
        <Videos videos={this.props.videos} />
      </div>
    );
  }

});

module.exports = List;