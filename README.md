# Lab4_TMPS
## Taks:Build an functional where use Behavioral Design Patterns .
## Theory about the patterns:
### * The command pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.
### * The visitor pattern  is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
### * The strategy pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
### * The state pattern is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
### 1. Command pattern:
- The WatchCommand class has a constructor that takes a movieState parameter and assigns its value to the this.movieState property.
```
export class WatchCommand {
    constructor(movieState) {
        this.movieState = movieState;
    }
```
- The execute() method is defined to execute the watch command by calling the watch() method on the movieState object.
```
execute() {
        this.movieState.watch();
    }
}
```
- Similarly, the UnwatchCommand class has a similar constructor that takes and assigns the movieState parameter. 
```
export class UnwatchCommand {
    constructor(movieState) {
        this.movieState = movieState;
    }

```
- Using these classes, commands can be created and executed to control the state of a movieState object.
### 2. The Visitor pattern:
- is used to check the rating of a movie.
```
export class RatingVisitor {
    visit(movie, rating) {
        movie.setRating(rating);
    }
}
```
### 3.The State pattern:
-The MovieState class provides methods to watch and unwatch a movie.
- When a movie is watched, it is added to the list of movies being watched using the WillWatch class. 
```
watch() {
        let result = new WillWatch();
        result.addWillWatch(this.movie);
    }
```
- When a movie is unwatched, it is removed from the list of movies being watched. 
```
unwatch() {
        let result = new WillWatch();
        result.removeWillWatch(this.movie);
    }
}
```
### 4.The Strategy pattern:
- The class WillWatch provides methods to add and remove movies from a "will watch" list.
```
addWillWatch(movie) {
        movie.setWillWatch(true);
    }
```
```
removeWillWatch(movie) {
        movie.setWillWatch(false);
    }
}
```

