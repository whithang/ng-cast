angular.module('video-player')
.service('youTube', function($http) {
  // name must match argument from controller of function
  this.getVideos = function(query, callback) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        max: 5,
        key: window.YOUTUBE_API_KEY,
        q: query,
        videoEmbeddable: 'true',
        type: 'video',
      },
      dataType: 'json',
    }).then(function successCallback(response) {
      console.log('youtube service successful!', response);
      callback(response);
    }, function errorCallback(response) {
      console.log('youtube service fail', response);
    });
  };
});
