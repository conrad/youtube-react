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
          date: '2012-04-23T18:25:43.511Z'
        },
        {
          title: "Philip Seymour Hoffman Laughing",
          author: "Tom Cruise",
          url: 'https://www.youtube.com/watch?v=vq_pjh1y2Ec',
          views: 19999999990000,
          date: '2012-04-23T18:25:43.511Z'
        },
        {
          title: "Top 10 Soccer Goals",
          author: "Pele",
          url: 'https://www.youtube.com/watch?v=rYZW_ujLH40',
          views: 10000023400,
          date: '2012-04-23T18:25:43.511Z'
        }
      ],
      searchText: ''
    };
  },

        // <Header searchText={this.state.searchText} />
  render: function() {
    return (
      <div className='container'>
        <Videos videos={this.state.videos} />
      </div>

    );
  }

});

module.exports = Main;