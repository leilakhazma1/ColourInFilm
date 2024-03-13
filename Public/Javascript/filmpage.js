// Initialize slideIndex to 1
let slideIndex = 1;

// Call showSlides with the initial slideIndex
showSlides(slideIndex);

// Function to move to the next or previous slide
function plusSlides(n) {
  // Increment slideIndex by n and call showSlides with the updated index
  showSlides(slideIndex += n);
}

// Function to display a specific slide
function currentSlide(n) {
  // Set slideIndex to n and call showSlides with the updated index
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  let i;
  // Get all elements with the class name 'mySlides' (assumed to be the slide elements)
  let slides = document.getElementsByClassName("mySlides");
  
  // If n is greater than the number of slides, set slideIndex to 1
  if (n > slides.length) { slideIndex = 1; }
  // If n is less than 1, set slideIndex to the last slide
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Display the slide with index slideIndex-1
  slides[slideIndex - 1].style.display = "block";
}

// Function to fetch film colors by ID
function fetchFilmColorsById(filmId) {
  // Fetch the JSON data
  fetch('./colourinfilm.json')
    // Parse the JSON data
    .then(response => response.json())
    .then(data => {
      // Check if data is an object with a 'films' array
      if (Array.isArray(data.films)) {
        // Find the film with the given ID
        const film = data.films.find(film => film.id === filmId);
        // If the film is found, create color slots for its colors
        if (film) {
          createColorSlots(film.colors);
        }
      }
    })
    // Log any errors that occur during the fetch
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
}

// Function to create color slots in the sidebar
function createColorSlots(colors) {
  // Get the sidebar element
  const sidebar = document.querySelector('.sidebar');
  
  // Create a color slot for each color in the colors array
  colors.forEach(color => {
    // Create a div element for the color slot
    const colorSlot = document.createElement('div');
    // Add the 'color-slot' class to the color slot
    colorSlot.classList.add('color-slot');
    // Set the background color of the color slot to the color value
    colorSlot.style.backgroundColor = color;
    
    // Add a mouseover event listener to change the background color of the body
    colorSlot.addEventListener('mouseover', function() {
      document.body.style.backgroundColor = color;
    });
    
    // Add a mouseout event listener to reset the background color of the body
    colorSlot.addEventListener('mouseout', function() {
      document.body.style.backgroundColor = '';
    });
    
    // Append the color slot to the sidebar
    sidebar.appendChild(colorSlot);
  });
}


