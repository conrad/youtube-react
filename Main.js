/** jsx React.DOM */

var React = require('react');
var Header = require('./Header');
var Videos = require('./Videos');

var Main = React.createClass({

  getInitialState: function() {
    return {
      // ping youtube API?
      videos: [
        {
          title: "Dog Sneezing",
          author: "Rover Hendrix",
          url: 'https://www.youtube.com/watch?v=829os-2BQBM',
          views: 10000000,
          date: 2015-01-01 20:49:23
        },
        {
          title: "Philip Seymour Hoffman Laughing",
          author: "Tom Cruise",
          url: 'https://www.youtube.com/watch?v=vq_pjh1y2Ec',
          views: 19999999990000,
          date: 2015-01-04 20:49:23
        },
        {
          title: "Top 10 Soccer Goals",
          author: "Pele",
          url: 'https://www.youtube.com/watch?v=rYZW_ujLH40',
          views: 10000023400,
          date: 2015-01-03 20:49:23
        }
      ],
      searchText: ''
    };
  },

  render: function() {
    return (
      <div className='container'>
        <Header searchText={this.state.searchText} />
        <Videos videos={this.state.videos} />
      </div>

    );
  }

});

module.exports = Main;