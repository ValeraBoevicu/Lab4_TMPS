import { Movie } from "./Movie.js";
import { RatingVisitor } from "./RatingVisitor.js";
import { MovieState } from "./MovieState.js";
import { WatchCommand } from "./Command.js";
import { UnwatchCommand } from "./Command.js";






class MovieList {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(movie) {
        const index = this.movies.indexOf(movie);
        if (index !== -1) {
            this.movies.splice(index, 1);
        }
    }

    updateRating(movie, rating) {
        const visitor = new RatingVisitor();
        visitor.visit(movie, rating);
    }

    createMovieState(movie) {
        return new MovieState(movie);
    }

    watch(movieState) {
        const command = new WatchCommand(movieState);
        command.execute();
    }

    unwatch(movieState) {
        const command = new UnwatchCommand(movieState);
        command.execute();
    }
}


let movieList = new MovieList();

let movie1 = new Movie('Terminal', 'NuStiuCine', 2000);
let movie2 = new Movie('Nenea', 'VAleriu Catarau', 1972);

movieList.addMovie(movie1);
movieList.addMovie(movie2);

movieList.updateRating(movie1, 9.3);

let movieState1 = movieList.createMovieState(movie1);
movieList.watch(movieState1);

console.log(movie1);
