class Film {
  constructor(id, title, director, releaseYear, genres) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }

  addGenre(genre) {
    return (this.genres = [...this.genres, genre]);
  }

  getFilmTitle() {
    return this.title;
  }
}

const favMovie = new Film(1, "Avatar", "James Cameron", "2016");

// console.log(favMovie.getFilmTitle());
console.log(favMovie.genres);
console.log(favMovie.addGenre("Sci-fi"));
console.log(favMovie.genres);
