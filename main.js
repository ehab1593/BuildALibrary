//Creating the parent class
class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings || [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(isChecked) {
    this._isCheckedOut = isChecked;
  }

  //This method will toggle the instances' checkout status true or false
  toggleCheckedOutStatus() {
    if (this._isCheckedOut === true) {
      this._isCheckedOut = false;
    } else {
      this._isCheckedOut = true;
    }
  }

  //Calculating average ratings of the media instance
  getAverageRating() {
    const sumRatings = this._ratings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return sumRatings / this._ratings.length;
  }

  //Populating the ratings array to get a rating between 1 and 5 from the user
  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
    } else {
      console.log("Enter a rating between 1 and 5");
    }
  }
}

//Subclass book
class Book extends Media {
  constructor(author, title, pages, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    this._pages = pages;
  }
}

//Subclass movie
class Movie extends Media {
  constructor(
    director,
    title,
    runtime,
    isCheckedOut,
    ratings,
    movieCast,
    songTitles
  ) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this._runtime = runtime;
    this._movieCast = movieCast || [];
  }

  get director() {
    return this._director;
  }

  get runtime() {
    return this._runtime;
  }

  get movieCast() {
    return this._movieCast;
  }

  addMovieCast(cast) {
    this._movieCast.push(cast);
  }
}

class CD extends Media {
  constructor(title, artist, songTitles, ratings, isCheckedOut) {
    super(title, isCheckedOut, ratings);
    this._songTitles = songTitles || [];
    this._artist = artist;
  }

  get songTitles() {
    return this._songTitles;
  }

  get artist() {
    return this._artist;
  }

  //Populating the songlist array
  addSongTitle(song) {
    this._songTitles.push(song);
  }

  //This method return the track list in the random order
  shuffle() {
    this._songTitles.sort(() => Math.random() - 0.5);
    return this._songTitles;
  }
}

//Subclass catalog to store all media items in the library
class Catalog {
  constructor(media) {
    this._media = [];
  }

  get media() {
    return this._media;
  }

  addMedia(media) {
    this._media.push(media);
  }
}

//Initializing instance of the book class
const historyOfEverything = new Book(
  "Bill Brayson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckedOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.addRating(3);

console.log(historyOfEverything.getAverageRating());

//Initialising instance of the movie class
const speed = new Movie("Jan De Bont", "Speed", 116);

speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

//Initialising instance of the CD class and adding songtitles to the empty array
const Wysy = new CD("When You See Yourself", "Kings of Leon");
Wysy.addSongTitle("The Bandit");
Wysy.addSongTitle("Claire and Eddie");
Wysy.addSongTitle("Supermarket");
Wysy.addSongTitle("100,000 People");
Wysy.addSongTitle("A Wave");

console.log(Wysy.songTitles);

Wysy.addRating(4);
Wysy.addRating(5);
Wysy.addRating(4.5);
Wysy.addRating(5);

console.log(Wysy.getAverageRating());
const shuffledSongList = Wysy.shuffle();
console.log(shuffledSongList);

//Storing all the media in the catalog class
const allMedia = new Catalog();
allMedia.addMedia(Wysy);
allMedia.addMedia(speed);
allMedia.addMedia(historyOfEverything);

console.log(allMedia);
