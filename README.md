describe Movie()

test: "it should display correct movie details in console log"
code: movieName = new Movie(name, times, priceMod)
result: name, times, priceMod

decribe MovieList.prototype.addId()
test: It should assign an id to a movie object
code: movieName = new Movie(name, times, priceMod)
      movieName.addId()
result: name, times, priceMod, 1

descibe MovieList.protoype.addMovie()
test: "it should add a movie object to the MovieList movies"
code: movieList = new MovieList()
      movieName = new Movie(name, times, priceMod)
      movieList.addMovie(movieName)
result: movieList(movieName.....)

describe MovieList.prototyle.movieGetter()
test: "It should return the movie object that name matches passed id"
code: movieList = new MovieList()
      movieName = new Movie(name, times, priceMod)
      movieName2 = new Movie(name2, times2, priceMod2)
      movieList.addMovie(movieName)
      movieList.movieGetter(1)
result: movieName (name, times, priceMod, 1)

describe Ticket()
test: "It should display correct ticket information in console"
code: newTicket = new Ticket(movieName, times)
result: newTicket (movie name, times, price)

describe Ticket.protype.priceFormula
test: :it should return an updated price based on price mod age if age is over 54
code: newTicket = new Ticket(movieName, times)
      newTicket.priceFormula(1, 55)
expeted output: 8

test: "it should return an updated price based on price mod age if age is under 54
code: newTicket = new Ticket(movieName, times)
      newTicket.priceFormula(1, 50)
expeted output: 10