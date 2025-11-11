
import games from "./data.js";
import { renderMovies } from "./render-games.js";
import { filterByGenre } from "./filter-genre.js";
import { searchGame } from "./search.js";
import { sortGames } from "./sort.js";


const gamesContainer = document.querySelector("[data-games]");
renderMovies(games, gamesContainer);


const filterByGenreButton = document.querySelector("[data-filter]");
const hendleFilter = (event) => {
  if (event.target.tagName === "BUTTON") {
    const genre = event.target.dataset.ganre;
    const filteredGames = filterByGenre(genre, games);
    renderMovies(filteredGames, gamesContainer);
  }
};

filterByGenreButton.addEventListener("click", hendleFilter);


// SEARCH ================= START
const input = document.querySelector("[data-search]");

const handleSeacrh = (e) => {
  const query = e.target.value.toLowerCase();
  const searchedGames = searchGame(query, games);
  renderMovies(searchedGames, gamesContainer);
};

input.addEventListener("input", handleSeacrh);
// SEARCH ================= END

// сортування
const select = document.querySelector("[data-sort]");

const handleSort = (event) => {
  const query = event.target.value;
  console.log(query);
  const sortedGames = sortGames(games, query);
  renderMovies(sortedGames, gamesContainer);
};

select.addEventListener("change", handleSort);


