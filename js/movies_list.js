const movieData = [
  { title: '세 얼간이', nation: 'IND', genre: ['COMM', 'ROM'], poster: './image/3idiots_poster.jpg' },
  { title: '파수꾼', nation: 'KOR', genre: ['DRA'], poster: './image/pasuggun_poster.jpg' },
  { title: '에브리씽 에브리웨어 올 앳 원스', nation: 'ENG', genre: ['ACT', 'SCI-FI', 'COMM'], poster: './image/everything_poster.png' },
  { title: '모가디슈', nation: 'KOR', genre: ['ACT', 'DRA', 'HIS'], poster: './image/mogadishu_poster.png' },
  { title: 'RRR', nation: 'IND', genre: ['ACT', 'HIS'], poster: './image/rrr_poster.jpg' },
  { title: '우리들', nation: 'KOR', genre: ['DRA'], poster: './image/urideul_poster.png' },
  { title: '굿 앤 바이', nation: 'JPN', genre: ['DRA'], poster: './image/goonandbye_poster.png' }
];


let selectedNation = 'ALL';
let selectedGenre = 'ALL';

function filterMovies() {
  const filteredMovies = movieData.filter(movie => {
    const nationMatch = selectedNation === 'ALL' || movie.nation === selectedNation;
    const genreMatch = selectedGenre === 'ALL' || movie.genre.includes(selectedGenre);
    return nationMatch && genreMatch;
  });

  updateMovieList(filteredMovies);
}

document.querySelector('.categories.nation .options').addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    selectedNation = event.target.getAttribute('data-value');
    filterMovies();
  }
});

document.querySelector('.categories.genre .options').addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    selectedGenre = event.target.getAttribute('data-value');
    filterMovies();
  }
});


function updateMovieList(movies) {
  const movieList = document.querySelector('.movie-list');
  movieList.innerHTML = ''; // 기존 목록을 지움

  if (movies.length === 0) {
    // 영화가 없을 경우, "존재하지 않음" 텍스트 표시
    const noMovies = document.createElement('div');
    noMovies.className = 'no-movies';
    noMovies.textContent = '해당 조건에 맞는 영화가 없습니다.';
    movieList.appendChild(noMovies);
  } else {
    movies.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.className = 'movie-item';

      // 포스터 이미지 추가
      const moviePoster = document.createElement('div');
      moviePoster.className = 'movie-poster';

      const posterImg = document.createElement('img');
      posterImg.src = movie.poster;
      posterImg.alt = movie.title;
      moviePoster.appendChild(posterImg);

      // 영화 제목 추가
      const movieTitle = document.createElement('div');
      movieTitle.className = 'movie-title';
      movieTitle.textContent = movie.title;

      movieItem.appendChild(moviePoster);
      movieItem.appendChild(movieTitle);
      movieList.appendChild(movieItem);
    });
  }
}


// 초기 필터링 호출
filterMovies();
