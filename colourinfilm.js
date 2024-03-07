document.addEventListener('DOMContentLoaded', function() {
    fetch('colourinfilm.json')
      .then(response => response.json())
      .then(data => {
        const filmList = document.querySelector('.film-list');
        data.films.forEach((film, index) => {
          const listItem = document.createElement('li');
          const link = document.createElement('a');
          link.href = 'filmpage.html'; // Set the link destination
          link.textContent = film.name; // Set the text content to the film name
          listItem.appendChild(link);
          filmList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  