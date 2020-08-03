"use strict";

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt
        ('Сколько фильмов вы уже посмотрели', '');
        

            while (personalMovieDB.count == '' || personalMovieDB.count == 
            null || isNaN(personalMovieDB.count)) {
                personalMovieDB.start();
            }
    },
    detectPersonalLevel: function() {
        if (0 < personalMovieDB.count && personalMovieDB.count < 10) {
                console.log('Просмотренно довольно мало фильмов');
            } else if (10 <= personalMovieDB.count && 
                personalMovieDB.count < 30) {
                console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastMovieWatched = 
            prompt('Один из последних просмотренных фильмов?', ''),
                scoreMovie = prompt('На сколько оцените его?', '');

            if (lastMovieWatched != null && scoreMovie != null && 
                lastMovieWatched != '' && scoreMovie != '' && 
                lastMovieWatched.length < 50) {
                personalMovieDB.movies[lastMovieWatched] = scoreMovie;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            } 
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
            let yuorGener = prompt(`Ваш любимый жанр под номером ${i}`, '');

            while (yuorGener == '' || yuorGener == null) {
                yuorGener = 
                prompt(`Ваш любимый жанр (повторно) под номером ${i}`, '');
            }
            personalMovieDB.genres.push(yuorGener);
        }

        personalMovieDB.genres.forEach(function(val, i, genres) {
                console.log(`Любимый жанр ${i + 1} - это ${val}`);
            });
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

function go() {
    personalMovieDB.start();

    personalMovieDB.detectPersonalLevel();

    personalMovieDB.rememberMyFilms();

    personalMovieDB.writeYourGenres();

    personalMovieDB.toggleVisibleMyDB();

    personalMovieDB.showMyDB();
}

