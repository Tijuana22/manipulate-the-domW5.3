let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(evt) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
 document.querySelector("#main-title")
 .innerHTML ="Welcome to DOM Toretto's homepage!";
 
  // Part 2
  document.querySelector("body")
  .style.backgroundColor = "#A0522D";
  
  // Part 3
  document.querySelectorAll("#favorite-things > li")
  favoriteThings =document.querySelector("li:last-child");
  favoriteThings.remove()

  // Part 4
  document.querySelectorAll(".special-title")
  .forEach((item) =>{
    item.style.fontSize = "2rem"

  })
  // Part 5
  document.querySelectorAll("#past-races > li")
  .forEach((item) =>{
    if (item.textContent ===  "Chicago"){
      document.querySelector("#past-races").removeChild(item)

    }
  })
  


  // Part 6
  let li = document.createElement("li")
  li.textContent = "Baja Mexico"
  document.querySelector('#past-races')
  .appendChild(li)

  // Part 7
  let blogPost =document.createElement("div")
  blogPost.classList.add("blog-post")
  blogPost.classList.add = ("purple")

  let heading =document.createElement("h2")
  heading.innerHTML = "Baja Mexico"
  heading.style.color = "#FFF"
  heading.style.marginBottom = "3rem"
  heading.style.fontSize = "2em"


  let pEl =document.createElement("p")
  pEl.innerHTML = "I ESCAPED L.A TO MEXICO, WHERE I DROVE MY RED CHEVELLE!"
  pEl.style.fontSize = "1.5rem"

  



  document.querySelector(".main").appendChild(blogPost)
  blogPost.appendChild(heading)
  blogPost.appendChild(pEl)



  // Part 8
  document.querySelector("#quote-title").addEventListener("click", (evt) => {
  randomQuote()
  }) 
  // Part 9
  document.querySelectorAll(".blog-post")
  .forEach((item) => {
  item.addEventListener("mouseout",(evt) =>{
    evt.currentTarget.classList.toggle('purple')
  })

  item.addEventListener("mouseenter", (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('red')
  })
})




});
