export class WatchCommand {
    constructor(movieState) {
        this.movieState = movieState;
    }

    execute() {
        this.movieState.watch();
    }
}

export class UnwatchCommand {
    constructor(movieState) {
        this.movieState = movieState;
    }

    execute() {
        this.movieState.unwatch();
    }
}

