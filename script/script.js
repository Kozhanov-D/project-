"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        //numberOfFilms = numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
        start();
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function detectPersonalLevel() {
    if (0 < personalMovieDB.count && personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovieWatched = prompt('Один из последних просмотренных фильмов?', ''),
            scoreMovie = prompt('На сколько оцените его?', '');

        if (lastMovieWatched != null && scoreMovie != null && lastMovieWatched != '' && scoreMovie != '' && lastMovieWatched.length < 50) {
            personalMovieDB.movies[lastMovieWatched] = scoreMovie;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        } 
    }
}

rememberMyFilms();

function showMyBd() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        let yuorGener = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(yuorGener);
    }
}

writeYourGenres();

showMyBd();