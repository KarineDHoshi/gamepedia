import API_KEY from "./apikey";
export const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayGame = (gameData) => {
      const { name, released, description, background_image } = gameData;
      const articleDOM = document.querySelector(".page-detail .article");
      articleDOM.querySelector("h1.title").innerHTML = name;
      articleDOM.querySelector("p.release-date span").innerHTML = released;
      articleDOM.querySelector("p.description").innerHTML = description;

      const cardListDOM = document.querySelector(".page-detail .card-list");
        const cardDOM = `
        <div class="card">
          <img src="${background_image}" class="card-img-top card-img-top-custom" alt="${name}">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
          </div>
        </div>
      `;

      cardListDOM.insertAdjacentHTML("beforeend", cardDOM);
    };

    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };

    fetchGame('https://api.rawg.io/api/games', cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article">
          <h1 class="title"></h1>
          <p class="release-date">Release date: <span></span></p>
          <p class="description"></p>
        </div>
        <div class="card-list"></div>
      </section>
    `;

    preparePage();
  };

  render();
};
