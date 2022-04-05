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

