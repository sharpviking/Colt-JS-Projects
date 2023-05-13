const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)
I
movies.filter(m => m.score > 80).map(m => m.title);
const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)