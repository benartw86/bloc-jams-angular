(function() {
    function CollectionCtrl() {
        this.albums = [];
        for(i = 0; i < 12; i++) {
            this.albums.push(angular.copy(albumPicasso));
        }
    }
    
    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();
