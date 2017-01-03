(function() {
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
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            })
            .state('collection', {  //$stateProvider, a component of UI-Router, will determine a number of properties for a state. 
                url:'/collection',  //For Bloc Jams, we'll need to know how to configure at least four aspects of a state: its name, URL route, controller, and template.0
                templateUrl: '/templates/collection.html'
            });
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);    
})();



//the second argument that is an array is called the dependency injection, for listing external modules