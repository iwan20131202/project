export const renderMovies = (games, container) => {
  const gamesHTML = `<ul class="games-list">
    ${games
      .map(
        (game) => `<li class="games-item">
                <article class="game">
                  <div class="game-photo">
                    <img src="${game.img}" alt="Постер ${game.name}" />
                  </div>
                  <div class="game-info">
                    <h2 class="game-title">${game.name}</h2>
                    <p class="game-year">${game.ReleaseDateExpected}</p>
                    <p class="game-description">${game.BriefDescription}</p>
                    <p class="game-ganre">${game.Genre.join(", ")}</p>
                    <p class="game-rating">${game.CurrentRatingsReviews}</p>
                    <a href="${game.OfficialWebsitePage}">поселання на сайт</a>
                  </div>
                < /article>
              </li>`
      )
      .join("")}
    </ul>`;

  container ? (container.innerHTML = gamesHTML) : null;
};
