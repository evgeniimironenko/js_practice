'use strict';

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms === 0) {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Класика');
    } else  if (personalMovieDB.count >31) {
        alert('Киноман');
    } else {
        alert('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(boolean) {
    if (!boolean) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();