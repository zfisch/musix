//create object to store all key bindings
var hash = {};

//configurations
var keys = ['a', 'a#', 'ab', 'b', 'bb', 'c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#'];
var scales = ['major', 'minor'];
var modes = [];
var cMaj = {
  1: 'c',
  2: 'd',
  3: 'e',
  4: 'f',
  5: 'g',
  6: 'a',
  7: 'b'
};

var songScale;

//helper functions
var setScale = function(key){
  var result;

  //do some stuff to choose a scale
  

  //for now, default to cMaj
  songScale = cMaj;
}

var playSound = function(key){
  console.log('playSound', key);
  // songScale[key].play();
}

var hashKey = function(key){
  if(!hash[key]){
    var rand = Math.floor( Math.random() * Object.keys(songScale).length );
    hash[key] = rand;
  }
  console.log('hashKey', hash);
};

//each key typed should refer to a sound
$(document).keypress(function(e){
  var key = e.which;
  if(key<123 && key>96){
    if(!songScale){
      setScale(key);
    }
    hashKey(e.which);
    playSound(hash[key]);
  }
});