'use strict'

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
let personalMovieDB = {
          count: +numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          privat: false
      };

let lastMovieWatched_1 = prompt('Один из последних просмотренных фильмов?', ''),
    scoreMovie_1 = prompt('На сколько оцените его?', ''),   
    lastMovieWatched_2 = prompt('Один из последних просмотренных фильмов?', ''),
    scoreMovie_2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieWatched_1] = scoreMovie_1;
personalMovieDB.movies[lastMovieWatched_2] = scoreMovie_2;
console.log(personalMovieDB);
