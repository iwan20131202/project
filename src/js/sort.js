export const sortGames = (games, query) => {
  const sortedGames = [...games].sort((a, b) => {
    if (query === "rating") {
      return b.CurrentRatingsReviews - a.CurrentRatingsReviews;
    } else if (query === "year") {
      return b.ReleaseDateExpected - a.ReleaseDateExpected;
    }
  });
  return sortedGames;
};