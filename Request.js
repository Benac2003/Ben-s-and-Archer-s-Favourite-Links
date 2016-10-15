while(done) {
var time = 3;
var done = true;
//choices
 var choice = prompt("What do you like(anime, Computer Games... choices still in progress");
//types 
var type = null;
//function requst 
var request = function(choice, time) {
 //anime 
 if (choice == "anime") {
  confirm("Free Anime on this Website, http://kissanime.to/");
  }
 //games
  if (choice == "Computer Games") {
   confirm("Free old Games on this Website, http://www.emuparadise.me/ and Download Program at ...(Website Here)");
  }
  if (time === 3) {
   confirm("All of the choices has run out, if you want to do this again, please re-run.");
    done = false;
  }
  time++;
  }
request(choice, time);
}
