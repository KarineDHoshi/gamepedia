import API_KEY from "./apikey";

export const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

  // Créer un champ de recherche
  const searchInput = document.createElement('input');
  searchInput.id = 'search-input';
  searchInput.type = 'text';
  searchInput.placeholder = 'Rechercher un jeu...';

  // Ajouter le champ de recherche à la page
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  searchContainer.appendChild(searchInput);
  const pageListContainer = document.querySelector('.page-list .articles');
  pageListContainer.before(searchContainer);

  // Mettre à jour les résultats lors de la saisie utilisateur
  searchInput.addEventListener('input', () => {
    fetchList(`https://api.rawg.io/api/games`, cleanedArgument);
  });

    
    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <img src="${article.background_image}" alt="${article.name}" class="cardGame-img">
          <h1>${article.name}</h1>
          <h2>${article.released}</h2>
          <a href="#pagedetail/${article.id}" class="button btn-primary" style="background: primary;">Voir plus</a>
        </article>`
      ));
    
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = `
        <div class="results-container">
          ${resultsContent.join("\n")}
        </div>
      `;
    };
    
    

    const fetchList = (url, argument) => {
      const searchInputValue = document.querySelector('#search-input').value;
      const searchQueryParam = searchInputValue ? `&search=${searchInputValue}` : '';
      const finalURL = `${url}?key=${API_KEY}${searchQueryParam}`;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };    
    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles"></div>
        </section>
    `;

    preparePage();
  };

  render();
};
