/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости asjasafsadgfswaew",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const Adv = document.querySelectorAll('.promo__adv img');

    const poster = document.querySelector('.promo__bg');


    const promoGenre = poster.querySelector('.promo__genre');


    const movieList = document.querySelector('.promo__interactive-list');

    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');


    const makeChanges = () => {
        promoGenre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };



    const sortArr = (arr) => {
        arr.sort();
    };

    movieDB.movies.sort();

    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };



    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('add favorite film');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMoveiList(movieDB.movies, movieList);
        }

        event.target.reset();



    });

    function createMoveiList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoveiList(films, parent);
            });
        });
    }

    deleteAdv(Adv);
    makeChanges();
    createMoveiList(movieDB.movies, movieList);


});
