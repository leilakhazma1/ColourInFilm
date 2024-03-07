// List of background images
const backgroundImages = [
  'Paris-Texas-018.jpg',
  'leon-the-professional-1994-450.jpg',
  'american-beauty-1999-4643.jpg'
];

let currentIndex = 0;

function changeBackground() {
  // Change the background image
  document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;

  // Increment the index or loop back to the beginning if at the end
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Call the function every five seconds
setInterval(changeBackground, 5000);