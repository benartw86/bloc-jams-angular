(function () {
    function LandingCtrl() {
        this.heroTitle = "Turn up the music!";
    }
    
    angular
        .module('blocJams')
        .controller('LandingCtrl', LandingCtrl);
})();