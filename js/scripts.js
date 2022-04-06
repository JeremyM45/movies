function Movie(name, times, priceMod, description, img)  {
  this.name = name
  this.times = times
  this.priceMod = priceMod
  this.description = description
  this.img = img
}
function MovieList()  {
  this.movies = {}
  this.id = 0
}
MovieList.prototype.addMovie = function(movie) {
  this.movies[movie.name] = movie;
};
MovieList.prototype.movieGetter = function(name)  {
  if  (this.movies[name] !== undefined) {
    return this.movies[name]
  }
};

function Ticket(movieName, time) {
  this.movieName = movieName
  this.time = time
  this.price = 10
}
Ticket.prototype.priceFormula = function(priceMod, age)  {
  if (age > 54) {
    this.price = (this.price * priceMod) * 0.8
    this.price = this.price.toFixed(2);
    return this.price
  } else {
    this.price = this.price * priceMod
    this.price = this.price.toFixed(2);
    return this.price
  }
};

function addMoviesToList()  {
  Object.keys(movieList.movies).forEach(function(key) {
    $("select#movie-list").append("<option>" + key + "</option")
  })  
}
function addTimesToList(movie)  {
  $("select#times-list").empty();
  movie.times.forEach(function(key) {
    $("select#times-list").append("<option>" + key + "</option")
  })  
}


let movieList = new MovieList();
const movie1 = new Movie("SONIC THE HEDGEHOG 2", ["7:30pm","8:30pm","9:30pm", "10:30pm"], 1, "When the manic Dr Robotnik returns to Earth with a new ally, Knuckles the Echidna, Sonic and his new friend Tails is all that stands in their way.", "<img src='img/Sonic.jpg' alt='A picture of a Sonic 2 Poster'>")
const movie2 = new Movie("SPIDER-MAN: NO WAY HOME", ["5:30pm", "6:30pm", "7:30pm"], 0.9, "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", "<img src='img/Spider-Man.jpg' alt='A picture of a Spider-Man No Way Home Poster'>")
const movie3 = new Movie("UNCHARTED", ["9:00am", "11:00am"], 0.85, "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.", "<img src='img/Uncharted.jpg' alt='A picture of a Uncharted Poster'>")
const movie4 = new Movie("TOP GUN: MAVERICK", ["8:00pm", "9:00pm", "10:45pm"], 1, "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.", "<img src='img/Top-Gun.jpg' alt='A picture of a Top Gun Maverick Poster'>")
movieList.addMovie(movie1)
movieList.addMovie(movie2)
movieList.addMovie(movie3)
movieList.addMovie(movie4)

$(document).ready(function()  {
  addMoviesToList();
  addTimesToList(movieList.movieGetter($("select#movie-list").val()));
  $("select#movie-list").change(function()  {
    addTimesToList(movieList.movieGetter($(this).val()))
  })
  $("form#form-age").submit(function(e) {
    e.preventDefault();
    const age = $("input#age").val();
    const movie = $("select#movie-list").val();
    const time = $("select#times-list").val();
    let ticket = new Ticket(movie, time)
    let price = ticket.priceFormula(movieList.movieGetter(movie).priceMod, age);
    $("#title").text(ticket.movieName)
    $("#picture").html(movieList.movieGetter(movie).img)
    $("#description").text(movieList.movieGetter(movie).description)
    $("#time").html("Time: <b>" + ticket.time + "</b>")
    $("#cost").html("Price: <b>$" + price + "</b>")
  });
});