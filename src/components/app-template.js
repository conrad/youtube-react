/** @jsx React.DOM */
var React = require('react');
var Header = require('./main/Header');

var Template = React.createClass({
  render: function() {
    return (
      <div>
      <Header />
      {this.props.children} 
      {this.state}
      </div>
    );
  }
});

module.exports = Template;