angular.module('video-player')

.component('search', {
  bindings: {
    youTube: '<'
  },

  templateUrl: 'src/templates/search.html'

});
