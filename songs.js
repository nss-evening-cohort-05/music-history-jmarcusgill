// var songs = [];
var outputDiv = document.getElementById("results");

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// function addToEnd(firstsong){
//   songs.push(firstsong);
// }

// function addToBeginning(lastsong){
//   songs.unshift(lastsong)
// }

// addToEnd("Natural Devotion by Spirit of the Behive on the album You Are Arrived");
// addToBeginning("Baby Boy by Pile on the album Dripping");

// var newSongs = [];
//   for (var i = 0; i < songs.length; i++) {
//     var fixedSongs = songs[i].toString();
//     console.log(fixedSongs);
//     fixedSongs = fixedSongs.replace(/[.*+?!^${}()|@]/g, '').replace(/\s[>]/g, '');
//     newSongs.push(fixedSongs + "<br>");
//   }

// outputDiv.innerHTML = `<div> ${newSongs.toString().replace(/,/g, '')}</div>`;
function makeDom(xhrData){
  outputDiv.innerHTML = "";
  for(var i = 0; i < xhrData.songs.length; i++) {
    currentSong = xhrData.songs[i];
    var fullSongName = currentSong.name;
    var artistName = currentSong.artist;
    var albumName = currentSong.album;
    var genre = currentSong.genre;
    outputDiv.innerHTML += `<h4>${fullSongName}</h4><ul><li class="songInfo">${artistName}</li> | <li class="songInfo">${albumName}</li> | <li class="songInfo">${genre}</li>`


  }

}


function getSongInfo() {
  var data = JSON.parse(this.responseText);
  makeDom(data);
}

function fileFailed() {
  alert("your stuff messed up");
}








var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", getSongInfo);
myRequest.addEventListener("error", fileFailed);
myRequest.open("GET", "songs.json");
myRequest.send();