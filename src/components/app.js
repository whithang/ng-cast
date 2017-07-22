angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.video = window.exampleVideoData[0];
    this.url = ('https://www.youtube.com/embed/').concat(this.video.id.videoId);
    this.selectVideo = (video) => {
      this.video = video;
      this.url = ('https://www.youtube.com/embed/').concat(this.video.id.videoId);
    };
    // console.log('search working', youTube.getVideos);
    this.searchYoutube = () => {
      console.log('searchYoutube starts');
      youTube.getVideos(this.query, this.updateVideos);
    };

    this.updateVideos = (data) => {
      console.log('updateVideos starts');
      this.videos = data;
      this.videos = data[0];
      this.url = ('https://www.youtube.com/embed/').concat(data[0].id.videoId);
    };
  },

  templateUrl: 'src/templates/app.html'
});
