// Class Movie definition
class Movie {
    // Constructor for Movie class
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    // Static method getPG to filter movies with a rating of "PG"
    static getPG(movieArray) {
      return movieArray.filter(movie => movie.rating === "PG");
    }
  }
  
  // Create an instance of Movie with the title "Casino Royale", studio "Eon Productions", and the default rating "PG"
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions");
  
  // Output the created instance
  console.log(casinoRoyale);
  
  // Example usage of getPG method
  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4", "PG"),
  ];
  
  const pgMoviesArray = Movie.getPG(movies);
  
  // Output the array containing only "PG" rated movies
  console.log(pgMoviesArray);
  