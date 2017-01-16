(function() {
     function seekBar($document) {
         
           var calculatePercent = function(seekBar, event) {
                var offsetX = event.pageX - seekBar.offset().left;
                var seekBarWidth = seekBar.width();
                var offsetXPercent = offsetX / seekBarWidth;
                offsetXPercent = Math.max(0, offsetXPercent);
                offsetXPercent = Math.min(1, offsetXPercent);
                return offsetXPercent;
           };
         
          return {
            templateUrl: '/templates/directives/seek_bar.html',
            replace: true,
            restrict: 'E',
            scope: {  
                onChange: '&'   
            },
              
              //'&' provides a way to execute an expression in the parent scope, allos the treatment of the given attribute differently, directive evaluates the attribute
              
            link: function(scope, element, attributes) {
                scope.value = 0;
                scope.max = 100;
                
                var seekBar = $(element);
                
                attributes.$observe('value', function(newValue) {
                    scope.value = newValue;
                });
                
                attributes.$observe('max', function(newValue) {
                    scope.value = newValue;
                });
 
                var percentString = function () {
                    var value = scope.value;
                    var max = scope.max;
                    var percent = value / max * 100;
                    return percent + "%";
                };
 
                scope.fillStyle = function() {
                    return {width: percentString()};
                };
                
                scope.thumbStyle = function() {
                    return{left: percentString()};
                }
                
                scope.onClickSeekBar = function(event) {
                    var percent = calculatePercent(seekBar, event);
                    scope.value = percent * scope.max;
                    notifyOnChange(scope.value);
                };
                
                scope.trackThumb = function() {
                    $document.bind('mousemove.thumb', function(event) {
                        var percent = calculatePercent(seekBar, event);
                        scope.$apply(function() {
                            scope.value = percent * scope.max;
                            notifyOnChange(scope.value);
                    });
                });
 
                $document.bind('mouseup.thumb', function() {
                    $document.unbind('mousemove.thumb');
                    $document.unbind('mouseup.thumb');
                    
                    });
                };
                
                //notifyOnChange has purpose of notifying onChange that scope.value has been updated.    
                    
                var notifyOnChange = function(newValue) {
                    if (typeof scope.onChange === 'function') {
                        scope.onChange({value: newValue});
                    }
                };  
             }
         };
     }
 
     angular
         .module('blocJams')
         .directive('seekBar', ['$document', seekBar]);
 })();



//this is the directive's view which connects to its scope.  Declaring an empty scope property ensures that a new scope will exist solely for the directive, allowing binding between view and scope

/* templateUrl Specifies a URL from which the directive will load a template.
replace	Specifies what the template should replace. If true, the template replaces the directive's element. If false, the template replaces the contents of the directive's element.
restrict	Restricts the directive to a specific declaration style: element  E, attribute A, class C, and comment M. If omitted, the defaults (E and A) are used. Multiple restrictions are stringed together, for example AE or AEC.  */