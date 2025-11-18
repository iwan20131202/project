export const searchGame = (query, games) => {
  const searchResult = games.filter(
    (game) =>
      game.name.toLowerCase().includes(query) ||
      game.BriefDescription.toLowerCase().includes(query)
  );
  return searchResult;
};
