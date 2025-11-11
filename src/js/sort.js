export const sortGames = (games, query) => {
  const sortedGames = [...games].sort((a, b) => {
    if (query === "rating") {
      return b.rating - a.rating;
    } else if (query === "year") {
      return b.year - a.year;
    }
  });
  return sortedGames;
};