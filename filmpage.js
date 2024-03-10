
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Function to fetch film colors by ID
function fetchFilmColorsById(filmId) {
  // Fetch the JSON data
  fetch('colourinfilm.json')
    .then(response => response.json())
    .then(data => {
      // Assuming data is an object with a 'films' array
      if (Array.isArray(data.films)) {
        const film = data.films.find(film => film.id === filmId);
        if (film) {
          createColorSlots(film.colors);
        }
      }
    })
    .catch(error => {
      console.error('Error fetching JSON data:', error);
    });
}

// Function to create color slots in the sidebar, mouseover event to change background 
function createColorSlots(colors) {
  const sidebar = document.querySelector('.sidebar');
  colors.forEach(color => {
    const colorSlot = document.createElement('div');
    colorSlot.classList.add('color-slot');
    colorSlot.style.backgroundColor = color;
    colorSlot.addEventListener('mouseover', function() {
      document.body.style.backgroundColor = color;
    });
    colorSlot.addEventListener('mouseout', function() {
      document.body.style.backgroundColor = '';
    });
    sidebar.appendChild(colorSlot);
  });
}




