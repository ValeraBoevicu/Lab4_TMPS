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

//o clasa de tip state cu 2 functii, de a schimba starea to WillWatch si will not