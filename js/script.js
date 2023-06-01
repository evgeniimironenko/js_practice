'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count === 0) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel () {
        if (personalMovieDB.count < 10) {
            alert('Мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Класика');
        } else  if (personalMovieDB.count >31) {
            alert('Киноман');
        } else {
            alert('Ошибка');
        }
    },
    rememberMyFilms () {
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
    },
    writeYourGenres () {
        for (let i = 1; i <= 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres === null) {
               i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((genre, position) => {
            console.log(`Любимый жанр ${position + 1} - это ${genre}` );
        });
    },
    toggleVisibleMyDB () {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    showMyDB (boolean) {
        if (!boolean) {
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.start();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.showMyDB(personalMovieDB.privat);