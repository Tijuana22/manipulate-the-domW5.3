let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 document.querySelector("#main-title")
 .textContent ="I'm DOM Toretto, Welcome to my page.";
 
  // Part 2
  document.querySelector("body")
  .style.backgroundColor = "blue";
  
  // Part 3
  let favoriteThings =document.querySelectorAll("#favorite-things > li")
  favoriteThings =document.querySelector("li:last-child");
  favoriteThings.remove()

  // Part 4
  let specialTitle =document.querySelectorAll(".special-title")
  specialTitle.forEach((item) =>{
    item.style.fontSize = "2rem"

  })
  // Part 5
  let pastRaces =document.querySelectorAll("#past-races > li")
  pastRaces =document.querySelectorAll;
  


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
