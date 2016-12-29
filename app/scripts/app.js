(function) {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider                  //becuase $stateProvider.state() returns $stateProvider, we are able to call state() again without having to reference the $stateProvider, called method chaining
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state(album, {
                url: '/album',
                templateUrl: '/templates/album.html'
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);    
})();



//the second argument that is an array is called the dependency injection, for listing external modules