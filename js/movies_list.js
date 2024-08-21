const movieData = [
  {
    title: '세 얼간이',
    engtitle: '3 Idiots',
    nation: '인도',
    genre: ['코미디', '로맨스'],
    openyear: 2009,
    runningtime: '171분',
    director: '라지쿠마르 히라니',
    actors: '아미르 칸, R. 마드하반, 샤르만 조시 외',
    rating: '⭐ 5.0 / 5',
    comment: '부조리를 깨고 나온 이레귤러들의 외침',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '일류 명문대 ICE에 다니는 세 남자 란초, 파르한, 라주는 진정한 꿈을 찾기 위해 세상과 담판을 짓는다. 성적으로 학생들을 줄 세우는 취업사관학교가 되어버린 대학교에 도전장을 던진 란초, 아버지의 강요로 좋아하지도 않는 공학자가 되기 위해 꿈을 포기한 파르한, 어려운 가정형편으로 생계를 위해 무조건 대기업에 취직해야 하는 라주는 각자의 진실된 꿈을 이루기 위해 고군분투한다.',
    link: 'None'
  },
  {
    title: '파수꾼',
    engtitle: 'Break Night',
    nation: '한국',
    genre: ['드라마'],
    openyear: 2011,
    runningtime: '117분',
    director: '윤성현',
    actors: '이제훈, 서준영, 박정민 외',
    rating: '⭐ 4.3 / 5',
    comment: '방황 끝에서의 영원한 시절인연',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '한 소년이 죽었다. 평소 아들에게 무심했던 소년의 아버지는 아들의 갑작스런 공백에 매우 혼란스러워하며 아들 기태의 죽음을 뒤쫓기 시작한다. 아들의 책상 서랍 안, 소중하게 보관되어 있던 사진 속에는 동윤과 희준이 있다. 하지만 학교를 찾아가 겨우 알아낸 사실은 한 아이는 전학을 갔고 한 아이는 장례식장에 오지도 않았다는 것.<br>천진하고 순수했던 그 시절, 미성숙한 소통의 오해가 불러 일으킨 비극적 파국. 독단적 우정이 가져온 폭력과 그 상처의 전염은 우리를 아프고 충격적인 결말로 이끌어간다. 서로가 전부였던 이 세 친구들 사이에서 과연 무슨 일이 벌어진 걸까?',
    link: 'https://www.netflix.com/kr/title/70241161'
  },
  {
    title: '에브리씽 에브리웨어 올 앳 원스',
    engtitle: 'Everything Everywhere All at Once',
    nation: '미국',
    genre: ['액션', 'SF', '코미디'],
    openyear: 2022,
    runningtime: '150분',
    director: '다니엘 콴, 다니엘 샤이너트',
    actors: '양자경, 스테파니 수, 키호이 콴 외',
    rating: '⭐ 4.8 / 5',
    comment: '친절할 것, 그리고 사랑할 것',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '미국에 이민 와 힘겹게 세탁소를 운영하던 에블린은 세무당국의 조사에 시달리던 어느 날, 남편의 이혼 요구와 삐딱하게 구는 딸로 인해 대혼란에 빠진다.<br>그 순간 에블린은 멀티버스 안에서 수천, 수만의 자신이 세상을 살아가고 있다는 사실을 알게 되고, 그 모든 능력을 빌려와 위기의 세상과 가족을 구해야 하는 운명에 처한다.',
    link: 'https://watcha.com/contents/mO079w7'
  },
  {
    title: '모가디슈',
    engtitle: 'Escape from Mogadishu',
    nation: '한국',
    genre: ['액션', '드라마', '역사'],
    openyear: 2021,
    runningtime: '121분',
    director: '류승완',
    actors: '김윤석, 조인성, 허준호, 구교환 외',
    rating: '⭐ 4.5 / 5',
    comment: '격전 속 동질감, 그러나 동지는 아닌',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '내전으로 고립된 낯선 도시, 모가디슈. 지금부터 우리의 목표는 오로지 생존이다!<br>대한민국이 UN가입을 위해 동분서주하던 시기 1991년 소말리아의 수도 모가디슈에서는 일촉즉발의 내전이 일어난다. 통신마저 끊긴 그 곳에 고립된 대한민국 대사관의 직원과 가족들은 총알과 포탄이 빗발치는 가운데, 살아남기 위해 하루하루를 버텨낸다. 그러던 어느 날 밤, 북한 대사관의 일행들이 도움을 요청하며 문을 두드리는데….<br>목표는 하나, 모가디슈에서 탈출해야 한다!',
    link: 'https://www.netflix.com/kr/title/81495859'
  },
  {
    title: 'RRR',
    engtitle: 'Rise Roar Revolt',
    nation: '인도',
    genre: ['액션', '역사'],
    openyear: 2022,
    runningtime: '187분',
    director: 'S.S. 라자몰리',
    actors: 'N.T. 라마 라오 주니어, 람 차란 외',
    rating: '⭐ 4.3 / 5',
    comment: '다르되 같았던 열망과 소망',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary:'영국의 지배를 받는 인도, 식민지 경찰로 출세하고픈 라주와 영국인 총독에게 끌려간 여동생을 구해야 하는 곤드족의 수호자 빔은 각자의 목적을 달성하기 위해 지독한 싸움을 시작한다.',
    link: 'https://www.netflix.com/kr/title/81476453'
  },
  {
    title: '우리들',
    engtitle: 'The World of Us',
    nation: '한국',
    genre: ['드라마'],
    openyear: 2016,
    runningtime: '94분',
    director: '윤가은',
    actors: '설혜인, 최수인 외',
    rating: '⭐ 4.6 / 5',
    comment: "수많은 '우리들'이 가지던 복잡성",
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '그 여름, 나에게도 친구가 생겼다… “내 마음이 들리니?”<br>언제나 혼자인 외톨이 선은 모두가 떠나고 홀로 교실에 남아있던 방학식 날, 전학생 지아를 만난다. 서로의 비밀을 나누며 순식간에 세상 누구보다 친한 사이가 된 선과 지아는 생애 가장 반짝이는 여름을 보내는데, 개학 후 학교에서 만난 지아는 어쩐 일인지 선에게 차가운 얼굴을 하고 있다. 선을 따돌리는 보라의 편에 서서 선을 외면하는 지아와 다시 혼자가 되고 싶지 않은 선. 어떻게든 관계를 회복해보려 노력하던 선은 결국 지아의 비밀을 폭로해버리고 마는데…. 선과 지아, 우리는 다시 "우리"가 될 수 있을까?',
    link: 'https://www.netflix.com/kr/title/81190728'
  },
  {
    title: '굿 앤 바이',
    engtitle: 'Depature, おくりびと',
    nation: '일본',
    genre: ['드라마'],
    openyear: 2008,
    runningtime: '130분',
    director: '다키타 요지로',
    actors: '모토키 마사히로, 히로스에 료코 외',
    rating: '⭐ 4.4 / 5',
    comment: '누군가에게 죽음은 떠나보내는 여정',
    description: '두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고 두세줄 정도 되는 설명 내가 하고 싶은 말 어쩌고',
    summary: '첼리스트 다이고는 악단 해체 이후 아내 미카와 고향으로 돌아간 뒤, 장례지도회사를 여행사로 오해하고 면접을 본다. 이후 합격한 다이고는 일을 배워나가며 인생의 마지막 여정인 죽음을 배웅하는 일에 사명감을 갖게 되지만, 주변의 친구들은 다이고의 새 직장에 껄끄러움을 느낀다.',
    link: 'None'
  }
];
const movieData2 = [
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
  const filteredMovies = movieData2.filter(movie => {
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

function updateDetailContent(index) {
  const movie = movieData[index]; // movieData 배열에서 해당 인덱스의 영화 정보를 가져옴
  document.getElementById('detailMovieName').textContent = movie.title;
  document.getElementById('detailMovieEngName').textContent = movie.engtitle;
  document.getElementById('openYear').textContent = movie.openyear;
  document.getElementById('runningTime').textContent = movie.runningtime;
  document.getElementById('director').textContent = movie.director;
  document.getElementById('actors').textContent = movie.actors;
  document.getElementById('detailRating').textContent = movie.rating;
  document.getElementById('detailComment').textContent = movie.comment;
  document.getElementById('detailDescription').textContent = movie.description;
  document.getElementById('summary').innerHTML = movie.summary;

  const gotoseeBtn = document.getElementById('gotosee');
  if (movie.link === 'None') {
    gotoseeBtn.onclick = function() {
      alert('지금은 정식으로 볼 수 있는 사이트가 없어요 ㅠㅠ');
    };
  } else {
    gotoseeBtn.onclick = function() {
      window.open(movie.link, '_blank');
    };
  }
}


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
    movies.forEach((movie, index) => {
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

      // 포스터 클릭 시 모달 열기 이벤트 추가
      moviePoster.addEventListener('click', () => {
        // movieData에서 해당 영화를 찾음
        const movieDetailIndex = movieData.findIndex(m => m.title === movie.title);
        if (movieDetailIndex !== -1) {
          updateDetailContent(movieDetailIndex); // 영화 정보를 모달에 업데이트
          document.getElementById('modalOverlay').style.display = 'flex'; // 모달을 화면에 표시
        }
      });
    });
  }
}

// 닫기 버튼으로 모달 닫기
document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modalOverlay').style.display = 'none';
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.getElementById('modalOverlay').style.display = 'none';
  }
});

filterMovies()