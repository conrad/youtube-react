/** jsx React.DOM */

var React = require('react');
var AppStore = require('../../stores/AppStore');

var Uploader = React.createClass({

  render: function() {
    return (
      <div className='uploader'>
        Hey! This is going to be the Uploader!
        <img src='' />
      </div>

    );
  },

  _onChange: function(){
    this.setState(getState());
    console.log('setstate called');
  }

});

module.exports = Uploader;



