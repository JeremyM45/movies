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
  movie.id = this.addId();
  this.movies[movie.id] = movie;
};
MovieList.prototype.addId  = function()  {
  this.id += 1;
  return this.id;
};
MovieList.prototype.movieGetter = function(id)  {
  if  (this.movies[id] !== undefined) {
    return this.movies[id]
  }
}

function Ticket(movieName, time) {
  this.movieName = movieName
  this.time = time
  this.price = 10
}
Ticket.prototype.priceFormula = function(priceMod, age)  {
  if (age > 54) {
    this.price = (this.price * priceMod) * 0.8
    return this.price
  }
}
