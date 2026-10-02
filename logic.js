var dino = document.createElement('div');
var bad = document.createElement('div');

var size = 150;
var badSize = 75;

dino.className = 'dino';
dino.style.width = size + 'px';
dino.style.height = size + 'px';

bad.className = 'bad';
bad.style.width = badSize + 'px';
bad.style.height - badSize + 'px';


document.getElementById('body').appendChild(dino);
document.getElementById('body').appendChild(bad);