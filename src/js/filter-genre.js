export const filterByGenre = (Genre, games) => {
  const filteredGames= games.filter((game) => game.Genre.includes(Genre));
  return filteredGames;
};