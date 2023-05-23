export class Movie {
    constructor(title, director, releaseYear) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = null;
        this.isWillWatch = false;
    }

    setRating(rating) {
        this.rating = rating;
    }

    setWillWatch(isWillWatch) {
        this.isWillWatch = isWillWatch;
    }
}
