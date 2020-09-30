
/* ====================
  Quote Selection Button
  ====================*/
/*InIt Variables and States*/
var quotesArray = document.getElementsByClassName('quotes');
randomNumber = Math.floor(Math.random() * quotesArray.length)

for (var i = 0; i < 6; i++) {
  quotesArray[i].style.display = 'none';
}
quotesArray[randomNumber].style.display = 'block';
var lastRandomNumber = randomNumber;

/*When Button Clicked*/
document.getElementById("quoteButton").addEventListener("click", function() {
  while (randomNumber === lastRandomNumber) {
    randomNumber = Math.floor(Math.random() * quotesArray.length)
  }

  quote = quotesArray[randomNumber]

  for (var i = 0; i < quotesArray.length; i++) {
    if (randomNumber === i) {
      quote.style.display = "block";
      continue;
    } else {
      quotesArray[i].style.display = "none";
    }
  }
  lastRandomNumber = randomNumber;
});

/* ====================
  Button URL Links
  ====================*/
document.getElementById("emailButton").onclick = function () {
    window.open("mailto:marqua55@msu.edu");
    };
document.getElementById("LinkedIn").onclick = function () {
        window.open("https://www.linkedin.com/in/andrewgmarquardt/","_blank");
    };
document.getElementById("Medium").onclick = function () {
        window.open("https://medium.com/@marqua55/", '_blank');
    };
document.getElementById("Instagram").onclick = function () {
        window.open("https://www.instagram.com/agmarquardt/?hl=en/", '_blank');
    };
