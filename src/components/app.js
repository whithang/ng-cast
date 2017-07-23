angular.module('video-player')
.component('app', {
  controller: function(youTube, $window) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.url = ('https://www.youtube.com/embed/').concat(this.video.id.videoId);

    this.selectVideo = (video) => {
      this.video = video;
      this.url = ('https://www.youtube.com/embed/').concat(this.video.id.videoId);
    };

    this.updateVideos = (data) => {
      this.videos = data;
      this.video = data[0];
      this.url = ('https://www.youtube.com/embed/').concat(data[0].id.videoId);
    };

  },

  templateUrl: 'src/templates/app.html'
});
