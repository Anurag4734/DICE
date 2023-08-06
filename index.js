var c = Math.random();
c = Math.floor(c*6);
c = c+1;
if (c ===1) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice1.png' alt='Face having 1 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice1.png");
}else if (c ===2) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice2.png' alt='Face having 2 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice2.png");
}else if (c ===3) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice3.png' alt='Face having 3 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice3.png");

}else if (c ===4) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice4.png' alt='Face having 4 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice4.png");

}else if (c ===5) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice5.png' alt='Face having 5 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice5.png");
}else {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice6.png' alt='Face having 6 in Dice'>"
document.querySelector("#img-1").setAttribute("src","images/dice6.png");
}
var z = Math.random();
z = Math.floor(z*6);
z = z+1;
if (z ===1) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice1.png' alt='Face having 1 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice1.png");
}else if (z ===2) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice2.png' alt='Face having 2 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice2.png");
}else if (z ===3) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice3.png' alt='Face having 3 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice3.png");

}else if (z ===4) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice4.png' alt='Face having 4 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice4.png");

}else if (z ===5) {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice5.png' alt='Face having 5 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice5.png");
}else {
// document.querySelector("#img-1").innerHTML = "<img src='images/dice6.png' alt='Face having 6 in Dice'>"
document.querySelector("#img-2").setAttribute("src","images/dice6.png");
}
if(c>z){
document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(z > c){
document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
document.querySelector("h1").innerHTML = "Draw!";
}