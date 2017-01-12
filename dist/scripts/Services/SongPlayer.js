(function() {
    function SongPlayer(Fixtures) {
        
        /**
        * @desc declare empty variable that is returned, making properties public
        * @type {Object}
        */
        
        var SongPlayer = {};  
        
        /**
        * @desc currentAlbum store album information to access song array for next/previous
        * @type {Object}
        */
        
        var currentAlbum = Fixtures.getAlbum();
        
        
         /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        
        var currentBuzzObject = null; //private attribute
        
        /**
         * @function playSong
        * @desc makes the song selected play
        * @param {Object} song
        */
        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        }   
        
        /**
         * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        
    
    var setSong = function(song) {
        if (currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
    }
 
    currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
    });
 
    SongPlayer.currentSong = song;
 };
        
        /**
         * @function getSongIndex
        * @desc a function to get the index of the song
        * @param {Object} song
        */
        
    var getSongIndex = function() {
        return currentAlbum.songs.indexOf(song);
    }
        
        
        /*@desc: object to be used to determine if song is playing or not
        @type {object}. 
        */
        
    SongPlayer.currentSong= null;  //public attribute 

    SongPlayer.play = function(song) {
     song = song || SongPlayer.currentSong;
     if (SongPlayer.currentSong !== song) {
         setSong(song);
         playSong(song);
         
     } else if (SongPlayer.currentSong === song) {
         if (currentBuzzObject.isPaused(song)) {
             currentBuzzObject.play(song);
         }
     }
 }
 
    SongPlayer.pause = function(song) {
        song = song || SongPlayer.currentSong;    
        currentBuzzObject.pause();
        song.playing = false;
       };
    return SongPlayer;
}
        /**
        * @desc a method to get the previous song in the index of album's songs
          @type method
        */
    
   SongPlayer.previous = function() {
     var currentSongIndex = getSongIndex(SongPlayer.currentSong);
     currentSongIndex--;
        
         if (currentSongIndex < 0) {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
     } else {
         var song = currentAlbum.songs[currentSongIndex];
         setSong(song);
         playSong(song);
     }
    
};
    
 
    
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