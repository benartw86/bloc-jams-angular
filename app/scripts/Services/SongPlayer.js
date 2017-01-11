(function() {
    function SongPlayer() {
        var SongPlayer = {};  //declare empty variable that is returned, making properties public
        var currentSong= null;  //private attribute 
        
         /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        
        var currentBuzzObject = null; //private attribute
        
        
        /**
         * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        
    var playSong = function() {
     currentBuzzObject.play();
     song.playing = true;
    }   
    
        var setSong = function(song) {
    if (currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    currentSong = song;
 };

 SongPlayer.play = function(song) {
     if (currentSong !== song) {
         setSong(song);
         currentBuzzObject.play();
         song.playing = true;
     } else if (currentSong === song) {
         if (currentBuzzObject.isPaused()) {
             currentBuzzObject.play();
         }
     }
 }
 
 SongPlayer.pause = function(song) {
                currentBuzzObject.pause();
                song.playing = false;
            };
        return SongPlayer;
      }
    
 
    
    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();

/*  
Our SongPlayer service should now contain:

two private attributes: currentSong and currentBuzzObject,
one private function: setSong,
and two public methods: SongPlayer.play and SongPlayer.pause.
As the logic of the service grows, it's important to write good documentation for our own benefit as well as the benefit of other developers.

We'll continue to group our service logic into four groups and maintain them in this order:

private attributes
private functions
public attributes
public methods    */ 