const btn = document.querySelector('.generateRecomendation');

const updateMovies = [
    { name: "Missão impossível: ac...", assessment: "4.5/5", poster: "assets/missionImpossible.jpg", time: "2:43:00", date: 2023, trailer: "https://youtu.be/BLX5g-nPGXI" },
    { name: "Chevalier: A Verdadei...", assessment: "4.4/5", poster: "assets/chevalierAHistoria.jpg", time: "1:47:00", date: 2023, trailer: "https://youtu.be/5GB-yrKovFo" },
    { name: "O Pálido Olho Azul", assessment: "4.2/5", poster: "assets/oPalidoOlhoAzul.png", time: "2:08:00", date: 2023, trailer: "https://youtu.be/ANnDun4ZuGs" },
    { name: "O Urso do Pó Branco", assessment: "3.2/5", poster: "assets/oUrsoDoPo.jpg", time: "1:31:00", date: 2023, trailer: "https://youtu.be/iHlODHQ6Q2A" },
    { name: "Tin & Tina (2023)", assessment: "1.8/5", poster: "assets/TimETina.jpg", time: "1:59:00", date: 2023, trailer: "https://youtu.be/L8MxFIXvsK0" },
    { name: "Até os Ossos ", assessment: "3.3/5", poster: "assets/ateOsOssos.jpg", time: "2:10:00", date: 2022, trailer: "https://youtu.be/LTPCgWWwTXI" },
    { name: "Aftersun", assessment: "3.5/5", poster: "assets/aftersun.jpg", time: "1:36:00", date: 2022, trailer: "https://youtu.be/OSrkH-kEFG0" },
    { name: "Tudo em Todo Lugar ao...", assessment: "3.3/5", poster: "assets/tudoEmTodoLado.jpg", time: "2:19:00", date: 2022, trailer: "https://youtu.be/kULcXm9V7aY" },
    { name: "Tár", assessment: "3.1/5", poster: "assets/tar.jpg", time: "2:38:00", date: 2022, trailer: "https://youtu.be/neMq6nhR2xM" },
    { name: "Triângulo do Tristeza", assessment: "3.2/5", poster: "assets/trianguloDaTristeza.jpg", time: "2:27:00", date: 2022, trailer: "https://youtu.be/PoP_Z5dzdZ0" },
    { name: "Close", assessment: "4.4/5", poster: "assets/close.jpg", time: "1:45:00", date: 2022, trailer: "https://youtu.be/dlNWImeXzsQ" },
    { name: "Ruído Branco ", assessment: "2.0/5", poster: "assets/whiteNoise.jpg", time: "2:16:00", date: 2022, trailer: "https://youtu.be/Pxqr4syrSG8" },
    { name: "The Pregnancy Scheme", assessment: "3/5", poster: "assets/thePregnancyScheme.jpg", time: "1:25:00", date: 2023, trailer: "https://youtu.be/2z8Nacg_39k" },
    { name: "The Angry Black Girl ...", assessment: "4.1/5", poster: "assets/theAngryBlackGirlandHerMonster.jpg", time: "1:32:00", date: 2023, trailer: "https://youtu.be/CMq_ctM7HZA" },
    { name: "Space Pups", assessment: "4.3/5", poster: "assets/spacePups.jpg", time: "1:32:00", date: 2023, trailer: "https://youtu.be/hH97TkSCS2s" },
    { name: "Sobrenatural: A Porta Vermelha", assessment: "2.6/5", poster: "assets/SobrenaturalAPorta.jpg", time: "1:47:00", date: 2023, trailer: "https://youtu.be/Lsrfk3k2b6c" },
    { name: "20.0 Megaquake", assessment: "2.85/5", poster: "assets/Megaquake.jpg", time: "1:27:00", date: 2023, trailer: "https://youtu.be/RvxRsJXnoUA" },
    { name: "Em Solo Sagrado", assessment: "2.0/5", poster: "assets/onSacredGround.jpg", time: "1:54:00", date: 2023, trailer: "https://youtu.be/qhMew64z3iQ" },
    { name: "Fale Comigo", assessment: "3.9/5", poster: "assets/faleComigo.jpg", time: "1:35:00", date: 2023, trailer: "https://youtu.be/3pQzMe4L4yw" },
    { name: "Tema a noite", assessment: "3.0/5", poster: "assets/feartheNight.jpg", time: "1:32:00", date: 2023, trailer: "https://youtu.be/1QZNSrMTBSM" },
    { name: "No Ritmo da Fé", assessment: "3.0/5", poster: "assets/noRitmodaFe.jpg", time: "1:31:00", date: 2023, trailer: "https://youtu.be/wZs-OKoaLJc" },
    { name: "O pior erro do meu marido", assessment: "2.6/5", poster: "assets/myHusbandWorstMistake.jpg", time: "1:25:00", date: 2023, trailer: "https://youtu.be/1CPRqz47Tss" },
    { name: "Resgate no oceano", assessment: "4.0/5", poster: "assets/oceanRescue.jpg", time: "1:34:00", date: 2023, trailer: "https://youtu.be/ZDXycA1erWo" },
    { name: "Mansão Mal Assombrada", assessment: "3.7/5", poster: "assets/mansaoMalAssombrada.jpg", time: "2:05:00", date: 2023, trailer: "https://youtu.be/vSzdV5PFFcU" },
    { name: "Nascido para voar", assessment: "4.2/5", poster: "assets/bornToFly.jpg", time: "2:08:00", date: 2023, trailer: "https://youtu.be/RcHhSgcIhC4" },
    { name: "Minha Casa", assessment: "3.1/5", poster: "assets/minhaCasa.jpg", time: "1:28:00", date: 2023, trailer: "https://youtu.be/mThmo1O7r40" },
    { name: "Heróis das Máscaras Douradas", assessment: "2.0/5", poster: "assets/heroisDaMascaraDourada.jpg", time: "1:28:00", date: 2023, trailer: "https://youtu.be/7lrUS6QAh5I" },
];

btn.onclick = function () {
    this.innerHTML = "Gerando...<div class='circleIconButton'></div>";
    setTimeout(() => {
        this.innerHTML = "Nova recomendação <img class='flashButtonHead' src='assets/lightningIcon.png'>";
        updateMoviesOnScreen(updateMoviesTwo(),
            updateMoviesThree(), updateMoviesFour(),
            updateMoviesFive(), updateMoviesSix(),
            updateMoviesSeven(), updateMoviesEight(),
            updateMoviesNine(), updateMoviesTeen(),
            updateMoviesEleven(), updateMoviesTwelve());

    }, 2000);
}

const getRandomMovieIndex = () => {
    return Math.floor(Math.random() * updateMovies.length);
}


const shuffleArray = (noReapeatMovies) => {
    for (let i = noReapeatMovies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [noReapeatMovies[i], noReapeatMovies[j]] = [noReapeatMovies[j], noReapeatMovies[i]];
    }
    return noReapeatMovies;
};



// Movie One

const updateMoviesOnScreen = () => {
    const posterMovies = document.querySelectorAll('.posterMovie');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('.movieName', '#movieTwo');
        const starValue = poster.querySelector('.starColor');
        const imgPoster = poster.querySelector('.imgPosterMovie');
        const timeMovie = poster.querySelector('.timeMovie');
        const dateMovie = poster.querySelector('.dateMovie');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Two

const updateMoviesTwo = () => {
    const posterMovies = document.querySelectorAll('#posterMovieTwo');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieTwo');
        const starValue = poster.querySelector('#starMovieTwo');
        const imgPoster = poster.querySelector('#imgMovieTwo');
        const timeMovie = poster.querySelector('#timeMovieTwo');
        const dateMovie = poster.querySelector('#dateMovieTwo');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Three

const updateMoviesThree = () => {
    const posterMovies = document.querySelectorAll('#posterMovieThree');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieThree');
        const starValue = poster.querySelector('#starMovieThree');
        const imgPoster = poster.querySelector('#imgMovieThree');
        const timeMovie = poster.querySelector('#timeMovieThree');
        const dateMovie = poster.querySelector('#dateMovieThree');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Four

const updateMoviesFour = () => {
    const posterMovies = document.querySelectorAll('#posterMovieFour');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieFour');
        const starValue = poster.querySelector('#starMovieFour');
        const imgPoster = poster.querySelector('#imgMovieFour');
        const timeMovie = poster.querySelector('#timeMovieFour');
        const dateMovie = poster.querySelector('#dateMovieFour');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Five

const updateMoviesFive = () => {
    const posterMovies = document.querySelectorAll('#posterMovieFive');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieFive');
        const starValue = poster.querySelector('#starMovieFive');
        const imgPoster = poster.querySelector('#imgMovieFive');
        const timeMovie = poster.querySelector('#timeMovieFive');
        const dateMovie = poster.querySelector('#dateMovieFive');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Six

const updateMoviesSix = () => {
    const posterMovies = document.querySelectorAll('#posterMovieSix');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieSix');
        const starValue = poster.querySelector('#starMovieSix');
        const imgPoster = poster.querySelector('#imgMovieSix');
        const timeMovie = poster.querySelector('#timeMovieSix');
        const dateMovie = poster.querySelector('#dateMovieSix');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Seven

const updateMoviesSeven = () => {
    const posterMovies = document.querySelectorAll('#posterMovieSeven');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieSeven');
        const starValue = poster.querySelector('#starMovieSeven');
        const imgPoster = poster.querySelector('#imgMovieSeven');
        const timeMovie = poster.querySelector('#timeMovieSeven');
        const dateMovie = poster.querySelector('#dateMovieSeven');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie eight

const updateMoviesEight = () => {
    const posterMovies = document.querySelectorAll('#posterMovieEight');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieEight');
        const starValue = poster.querySelector('#starMovieEight');
        const imgPoster = poster.querySelector('#imgMovieEight');
        const timeMovie = poster.querySelector('#timeMovieEight');
        const dateMovie = poster.querySelector('#dateMovieEight');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Nine

const updateMoviesNine = () => {
    const posterMovies = document.querySelectorAll('#posterMovieNine');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieNine');
        const starValue = poster.querySelector('#starMovieNine');
        const imgPoster = poster.querySelector('#imgMovieNine');
        const timeMovie = poster.querySelector('#timeMovieNine');
        const dateMovie = poster.querySelector('#dateMovieNine');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Teen

const updateMoviesTeen = () => {
    const posterMovies = document.querySelectorAll('#posterMovieTeen');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieTeen');
        const starValue = poster.querySelector('#starMovieTeen');
        const imgPoster = poster.querySelector('#imgMovieTeen');
        const timeMovie = poster.querySelector('#timeMovieTeen');
        const dateMovie = poster.querySelector('#dateMovieTeen');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Eleven

const updateMoviesEleven = () => {
    const posterMovies = document.querySelectorAll('#posterMovieEleven');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieEleven');
        const starValue = poster.querySelector('#starMovieEleven');
        const imgPoster = poster.querySelector('#imgMovieEleven');
        const timeMovie = poster.querySelector('#timeMovieEleven');
        const dateMovie = poster.querySelector('#dateMovieEleven');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


// Movie Twelve

const updateMoviesTwelve = () => {
    const posterMovies = document.querySelectorAll('#posterMovieTwelve');
    const shuffledMovies = shuffleArray(updateMovies);
    posterMovies.forEach((poster, index) => {
        const movie = shuffledMovies[index];
        const nameMovie = poster.querySelector('#movieTwelve');
        const starValue = poster.querySelector('#starMovieTwelve');
        const imgPoster = poster.querySelector('#imgMovieTwelve');
        const timeMovie = poster.querySelector('#timeMovieTwelve');
        const dateMovie = poster.querySelector('#dateMovieTwelve');
        const trailerMovie = poster.querySelector('a');

        nameMovie.textContent = movie.name;
        starValue.textContent = movie.assessment;
        imgPoster.src = movie.poster;
        timeMovie.textContent = movie.time;
        dateMovie.textContent = movie.date;
        trailerMovie.href = movie.trailer;
    });
}


