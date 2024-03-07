fetch('colourinfilm.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const films = data.films;
    const filmList = document.querySelector('.film-list');
    films.forEach(film => {
      const listItem = document.createElement('li');
      listItem.textContent = film.name;
      listItem.addEventListener('click', () => {
        // Display film details or perform other actions
        console.log(`Clicked on ${film.name}`);
      });
      filmList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
