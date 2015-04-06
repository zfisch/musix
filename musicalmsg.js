//create object to store all key bindings
var keyBindings = {};

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

var hashKey = function(key){
  Math.floor( Math.random() * Object.keys(songScale).length )
}

//each key typed should refer to a sound
$(document).keypress(function(e){
  var key = e.which;
  if(!songScale){
    setScale(key);
  }

});