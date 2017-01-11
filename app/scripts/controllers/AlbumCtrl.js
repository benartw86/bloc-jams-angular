(function () {
    function AlbumCtrl(Fixtures, SongPlayer) {
        this.albumData = Fixtures.getAlbum(); 
        this.songPlayer = SongPlayer;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();


/*(function() {
    function AlbumCtrl() {
        this.songInfo = [];  //create an array to iterate over which has tr data on the song
        this.albumData = albumPicasso; //albumData property that holds a copy of albumPicasso.
        for(i = 0; i < this.albumData.songs.length; i++) {
            this.songInfo.push(this.albumData.songs);      //push albumData info to array for rows
        }
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();  */