function Movie(name, times, priceMod)  {
  this.name = name
  this.times = times
  this.priceMod = priceMod
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
const movie1 = new Movie("SONIC THE HEDGEHOG 2", ["7:30pm","8:30pm","9:30pm", "10:30pm"], 1)
const movie2 = new Movie("SPIDER-MAN: NO WAY HOME", ["5:30pm", "6:30pm", "7:30pm"], 0.9)
const movie3 = new Movie("UNCHARTED", ["9:00am", "11:00am"], 0.85)
const movie4 = new Movie("TOP GUN: MAVERICK", ["8:00pm", "9:00pm", "10:45pm"], 1)
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
    $("#time").text(ticket.time)
    $("#cost").text("$" + price)
  });
});