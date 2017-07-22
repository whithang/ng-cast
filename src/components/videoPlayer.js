angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
  },

  bindings: {
    video: '<',
    url: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
