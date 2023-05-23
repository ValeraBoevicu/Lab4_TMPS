import { WillWatch } from "./WillWatch.js";
export class MovieState {
    constructor(movie) {
        this.movie = movie;
    }

    watch() {
        let result = new WillWatch();
        result.addWillWatch(this.movie);
    }

    unwatch() {
        let result = new WillWatch();
        result.removeWillWatch(this.movie);
    }
}

