// Controller function to handle user actions
const colourInFilm = require();

function handleUserAction(action, params) {
    switch (action) {
    case "nextSlide": plusSlides(1);break;
    case "prevSlide": plusSlides(-1); break;
    case "showSlide": currentSlide(params.slideNumber);break; 
    case "fetchFilmColors": fetchFilmColorsById(params.filmId); break;
    default:
    break;
    }
  }
  