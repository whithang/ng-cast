angular.module('video-player')

.component('videoList', {
  // controller: function() {
  //   console.log(this, "videoplayer");
  // },
  
  
  bindings: {
    videos: '<',
    search: '<'
  },

  templateUrl: 'src/templates/videoList.html'
});
