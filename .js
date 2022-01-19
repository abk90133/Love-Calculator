var name = prompt("Enter your name: ");
var name1 = prompt("Enter your's Partner Name: ");

var name = Math.random()*100 ;
name = Math.floor(name) + 1;

// This +1 will include the 100 to this.

if (name > 0){
   alert("Your love percentage is: " + name + "%." + " You Really love each other alot!");
} else {
    alert("Your love percentage is: " + name + "%");
}
