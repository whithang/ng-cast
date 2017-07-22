angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    console.log(this);
  },

  bindings: {
    video: '<',
    id: '@'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});
