var songs = [];
var outputDiv = document.getElementById("results");

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addToEnd(firstsong){
  songs.push(firstsong);
}

function addToBeginning(lastsong){
  songs.unshift(lastsong)
}

addToEnd("Natural Devotion by Spirit of the Behive on the album You Are Arrived");
addToBeginning("Baby Boy by Pile on the album Dripping");

var newSongs = [];
  for (var i = 0; i < songs.length; i++) {
    var fixedSongs = songs[i].toString();
    console.log(fixedSongs);
    fixedSongs = fixedSongs.replace(/[.*+?!^${}()|@]/g, '').replace(/\s[>]/g, '');
    newSongs.push(fixedSongs + "<br>");
  }

outputDiv.innerHTML = `<div> ${newSongs.toString().replace(/,/g, '')}</div>`;