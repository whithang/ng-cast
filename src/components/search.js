angular.module('video-player')

.component('search', {
  controller: function(youTube) {
    this.youTube = () => {
      youTube.getVideos(this.query, this.key, (data) => { 
        this.result(data);
      });
    };
  },

  bindings: {
    service: '<',
    result: '<',
    key: '<'
  },

  templateUrl: 'src/templates/search.html'

});
