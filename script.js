document.getElementById('check').onclick = correct;
// document.getElementById('log').onclick = log;
document.getElementById('draw').onclick = draw;
document.getElementById('reset').onclick = clear;
document.getElementById('more').onclick = more;
document.getElementById('pok').onclick = pok;
document.getElementById('heart').onclick = hear;
document.getElementById('kirby').onclick = kirb;
document.getElementById('hint').onclick = hint;
document.getElementById('col').onclick = color;
document.getElementById('black').onclick = black;

var stat = false; //false = in hide info state, true = in show info state
var cl = 'black';
var black = true; //true = pen is black, false = pen is diff colour.

function color(){
  cl = prompt("Please enter the name of the colour you want your pen to be. (if hex precede with '#')");
  black = false;
}

function black(){
  cl = 'black';
  black = true;
}

function more(){
  if (stat == false){
    var t = document.getElementById('text');
    document.getElementById('more').innerText = "Hide";
    t.innerHTML = "0) All the base features!" + "<br>"  + "1) Allows you to pick from multiple puzzles! (Dynamically sized table)" + "<br>" + "2) Hints!" + "<br>" + "3) This nifty show/hide button!"; // insert text here
    t.innerHTML += "<br>" + "4) Clickable image!" + "<br>" + "5) Allows you to choose new colours. (Doesn't affect puzzle completion, just for fun)";
    stat = true;
  } else if (stat == true){
    document.getElementById('more').innerText = "Show";
    document.getElementById('text').innerHTML = "";
    stat = false;
  }
}

var user = [];

var poke = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 1, 2, 2, 1, 0, 1, 1, 0, 0 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 1, 0 ], [ 0, 0, 1, 2, 0, 2, 2, 2, 1, 0, 0, 1, 0 ], [ 0, 1, 2, 0, 0, 0, 2, 1, 1, 0, 0, 0, 1 ], [ 0, 1, 2, 2, 0, 2, 1, 0, 0, 1, 0, 0, 1 ], [ 0, 1, 2, 2, 2, 2, 1, 0, 0, 1, 0, 0, 1 ], [ 0, 1, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 1 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 1, 0 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 1, 0 ], [ 0, 0, 0, 1, 1, 2, 2, 1, 0, 1, 1, 0, 0 ], [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0 ] ];
poke.hint = "Gotta Catch 'Em All!";
poke.len = 13;
poke.clr = "red";

var heart = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0 ], [ 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0 ], [ 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1 ], [ 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0 ] ];
heart.hint = "What you give your lover.";
heart.len = 13;
heart.clr = "red";

var kirby = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 1, 0 ], [ 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1 ], [ 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 1 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 1 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0 ], [ 0, 1, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 0 ], [ 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 1 ], [ 0, 0, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 0, 1 ], [ 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1 ], [ 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 1 ], [ 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1 ], [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0 ] ];
kirby.len = 17;
kirby.hint = "Pink ball of suck.";
kirby.clr = "pink";


var puz = kirby;
var x = kirby.len;
var puzzles = [poke, heart, kirby];

for (var m=0; m<x; m++){
  user[m] = new Array(x);
  for (var k=0; k<x; k++){
    user[m][k] = 0;
  }
}

function hint(){
  alert(puz.hint);
}

var ro = []; //array of things to colour in each row
var co = []; //array of things to colour in each column
function genSides(x){
  ro = [];
  co = [];
  for(var i = 0; i < x; i++){
    var c = 0;
    var cStr = "";
    var cBoo = false;

    var r = 0;
    var rStr = "";
    var rBoo = false;
    for(var k = 0; k < x; k++){
      if((cBoo == true && puz[i][k] == 0)|| (cBoo == true && puz[i][k] == 2)){
        cStr += c;
        c = 0;
        cBoo = false;
        cStr += "<br>";
      }

      if(puz[i][k] == 1){
        c++;
        cBoo = true;
      }

      if(k == (x-1) && puz[i][k] == 1){
        cStr += c;
        c = 0;
        cBoo = false;
        cStr += " ";
      }

      if((rBoo == true && puz[k][i] == 0) || (rBoo == true && puz[k][i] == 2)){
        rStr += r;
        r = 0;
        rBoo = false;
        rStr += " ";
      }

      if(puz[k][i] == 1){
        r++;
        rBoo = true;
      }

      if(k == (x-1) && puz[k][i] == 1){
        rStr += r;
        r = 0;
        rBoo = false;
        rStr += " ";
      }
    }
    co.push(cStr);
    ro.push(rStr);
  }
}


function create(x){
    tab  = document.getElementById('tab');
    tab.style.border = '1px solid black';

    for(var i = 0; i < x; i++){
        var row = tab.insertRow();
        for(var j = 0; j < x; j++){
          if(j == 0 && i ==0){
            var col = row.insertCell();
            col.style.height = '5vh';
            col.style.width = '5vw';
            col.id = 'side';
            col.style.background = 'darkgray';
            col.y = i;
            col.x = j;
            col.innerHTML = 'Solve the outline of the puzzle using the black pen! <br> (Colour is for fun)'
          } else if(i == 0 ) {
            var col = row.insertCell();
            col.id = 'side';
            col.style.height = '20vh';
            col.style.width = '1px';
            col.style.background = 'darkgray';
            //col.style.orientation = 'upright';
            col.appendChild(document.createTextNode('AAAAAA'));
            col.y = i;
            col.x = j;
            col.innerHTML = co[j] ;
          } else if (j == 0){
            var col = row.insertCell();
            col.id = 'side';
            col.style.height = '1vh';
            col.style.width = '20vw';
            col.style.background = 'darkgray';
            col.appendChild(document.createTextNode('Cell'));
            col.y = i;
            col.x = j;
            col.innerHTML = ro[i];
          } else {
            var col = row.insertCell();
            col.id = 'center';
            col.style.height= '4vh';
            col.style.width = '4vw';
            col.style.background = 'white';
            col.y = i;
            col.x = j;
          }

        }
    }

}

genSides(x);
create(x);

function pok(){
  puz = puzzles[0];
  puz.len = puzzles[0].len;
  document.getElementById("tab").innerHTML = "";
  genSides(puz.len);
  create(puz.len);
}

function hear(){
  puz = puzzles[1];
  puz.len = puzzles[1].len;
  document.getElementById("tab").innerHTML = "";
  genSides(puz.len);
  create(puz.len);
}

function kirb(){
  puz = puzzles[2];
  puz.len = puzzles[2].len;
  document.getElementById("tab").innerHTML = "";
  genSides(puz.len);
  create(puz.len);
}

/*----onclick-----*/
var table = document.getElementById("tab");
table.addEventListener("click",function(e){
  if( e.target.nodeName == "TD"){
    //console.log(e.target.x + "x" + e.target.y);
    if(e.target.style.background == 'black'){
      user[e.target.x][e.target.y] = 0;
      e.target.style.background = 'white'
    }else if (e.target.style.background == 'white' && black == true) {
      user[e.target.x][e.target.y] = 1;
      e.target.style.background = 'black';
    } else if (e.target.style.background == 'white' && black == false ){
      e.target.style.background = cl;
    } else if (e.target.style.background == cl){
      e.target.style.background = 'white';
    } else if (black == true && e.target.style.background != 'darkgray'){
      e.target.style.background = 'black';
    }
  }
});

function correct(){
  var ans = true;
  for(var k = 0; k < puz.len; k++){
    for(var i = 0; i < puz.len; i++){
      if((user[i][k] != puz[i][k]) && (puz[i][k] == 1)){
        alert("Sorry but you were wrong");
        ans = false;
        break;
      }
    }
    if (ans == false){
      break;
    }
  }
  if(ans == true){
    draw();
    alert("You did it !!!")
  }
}

function draw(){
  var table = document.getElementById("tab");
  clear(puz.len);
  for(var k = 0; k < puz.len; k++){
    for(var i = 0; i < puz.len; i++){
      if(puz[i][k] == 1){
        table.rows[k].cells[i].style.background = 'black';
        user[i][k] = 1;
      } else if((puz[i][k] == 0) && (table.rows[k].cells[i].style.background == 'white')) {
        table.rows[k].cells[i].style.background = 'white';
      } else if(puz[i][k] == 2){
        table.rows[k].cells[i].style.background = puz.clr;
      }
    }
  }
}

function clear(){
  var table = document.getElementById("tab");
  for(var k = 1; k < puz.len; k++){
    for(var i = 1; i < puz.len; i++){
      table.rows[k].cells[i].style.background = 'white';
      user[k][i] = 0;
    }
  }

}
