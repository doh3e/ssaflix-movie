// 기존 코드 유지
let currentIndex = 0;
const bannerImages = [
  './image/3idiots_banner.png',  // 세얼간이 영화장면
  './image/pasuggun_banner.jpg', // 파수꾼
  './image/everything_banner.jpg',   // 3번째
  './image/mogadishu_banner.png',   // 4번째
  './image/rrr_banner.jpg',   // 5번째
  './image/urideul_banner.jpg',   // 6번째 추가
  './image/goodandbye_banner.jpg'    // 7번째 추가
];

const movieName = [
  '세 얼간이',
  '파수꾼',
  '에브리씽 에브리웨어 올 앳 원스',
  '모가디슈',
  'RRR',
  '우리들',
  '굿 앤 바이'
]

const movieEngName = [
  '3 Idiots',
  'Break Night',
  'Everything Everywhere All at Once',
  'Escape from Mogadishu',
  'Rise Roar Revolt',
  'The World of Us',
  'Depature'
]

// 영화 이름과 영어 이름을 표시할 요소 참조
const movieNameElement = document.getElementById('movieName');
const movieEngNameElement = document.getElementById('movieEngName');
const movieInfoElement = document.querySelector('.movie-info'); // 추가

const bannerImageContainer = document.querySelector('.main-photo');
let bannerImage = document.querySelector('.main-slide-banner'); // 현재 배너 이미지
const container = document.querySelector('.slide-container');   // 포스터 슬라이드 컨테이너
const prev = document.querySelector('.btnleft');                // 이전 버튼
const next = document.querySelector('.btnright');               // 다음 버튼

let isAnimating = false; // 애니메이션 상태 플래그
let slideInterval;

function startSlideInterval() {
  slideInterval = setInterval(() => {
    changeSlide('next');
  }, 5000);
}

function stopSlideInterval() {
  clearInterval(slideInterval); // 자동 슬라이드 멈춤
}

function updateBannerImage(index, direction) {
  const newImage = document.createElement('img');
  newImage.src = bannerImages[index];
  newImage.classList.add('main-slide-banner');
  newImage.style.left = direction === 'next' ? '100%' : '-100%'; // 이미지 초기 위치 설정

  // 영화 제목 페이드아웃
  movieInfoElement.classList.remove('show');

  bannerImageContainer.appendChild(newImage);

  setTimeout(() => {
    newImage.style.left = '0'; // 새로운 이미지가 화면에 나타남
    bannerImage.style.left = direction === 'next' ? '-100%' : '100%'; // 기존 이미지는 반대 방향으로 이동

    newImage.addEventListener('transitionend', () => {
      bannerImageContainer.removeChild(bannerImage);
      bannerImage = newImage; // 새로운 이미지를 현재 이미지로 업데이트

      // 영화 이름과 영어 제목 업데이트
      movieNameElement.textContent = movieName[index];
      movieEngNameElement.textContent = movieEngName[index];

      // 페이드인 애니메이션을 위해 클래스 추가
      setTimeout(() => {
        movieInfoElement.classList.add('show');
      }, 100); // 약간의 지연 후 페이드인 시작
    }, { once: true });
  }, 20);
}

// 포스터 슬라이드 제어 함수
function moveSlide(direction) {
  if (isAnimating) return;
  isAnimating = true;

  const slides = document.querySelectorAll('.slide');
  if (direction === 'next') {
    container.append(slides[0]); // 첫 번째 슬라이드를 마지막으로 이동
  } else if (direction === 'prev') {
    container.prepend(slides[slides.length - 1]); // 마지막 슬라이드를 첫 번째로 이동
  }

  setTimeout(() => {
    isAnimating = false; // 애니메이션 종료
  }, 1000); // transition 시간이 1초로 설정됨
}

// 슬라이드를 동시에 변경하는 함수
function changeSlide(direction) {
  if (isAnimating) return; // 애니메이션이 진행 중이면 함수를 종료

  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % bannerImages.length;
  } else if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
  }

  updateBannerImage(currentIndex, direction);
  moveSlide(direction);
}

// 터치 및 마우스 스와이프 기능 추가
function handleSwipe() {
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  // 터치 이벤트
  container.addEventListener('touchstart', function(event) {
      startX = event.touches[0].clientX;
  });

  container.addEventListener('touchmove', function(event) {
      currentX = event.touches[0].clientX;
  });

  container.addEventListener('touchend', function() {
      handleGesture();
  });

  // 마우스 이벤트
  container.addEventListener('mousedown', function(event) {
      isDragging = true;
      startX = event.clientX;
  });

  container.addEventListener('mousemove', function(event) {
      if (isDragging) {
          currentX = event.clientX;
      }
  });

  container.addEventListener('mouseup', function() {
      if (isDragging) {
          handleGesture();
          isDragging = false;
      }
  });

  container.addEventListener('mouseleave', function() {
      if (isDragging) {
          handleGesture();
          isDragging = false;
      }
  });

  function handleGesture() {
      const swipeThreshold = 50; // 스와이프를 감지할 임계값
      if (Math.abs(currentX - startX) > swipeThreshold) {
          if (currentX < startX) {
              changeSlide('next');
          } else if (currentX > startX) {
              changeSlide('prev');
          }
      }
  }
}

// 함수 호출
handleSwipe();

// 다음 버튼 클릭 시
next.addEventListener('click', () => {
  stopSlideInterval(); // 자동 슬라이드 멈춤
  changeSlide('next');
  startSlideInterval(); // 자동 슬라이드 재시작
});

// 이전 버튼 클릭 시
prev.addEventListener('click', () => {
  stopSlideInterval(); // 자동 슬라이드 멈춤
  changeSlide('prev');
  startSlideInterval(); // 자동 슬라이드 재시작
});

// 슬라이드 컨테이너 클릭 시
container.addEventListener('click', (event) => {
  if (window.innerWidth <= 900) {
    const containerRect = container.getBoundingClientRect();
    if (event.clientX < containerRect.width / 2) {
      changeSlide('prev');
    } else {
      changeSlide('next');
    }
  }
});

// 배너 및 포스터, 버튼에 hover 시 자동 슬라이드 멈춤
const elementsToHover = [bannerImageContainer, container, prev, next];
elementsToHover.forEach(element => {
  element.addEventListener('mouseenter', stopSlideInterval);
  element.addEventListener('mouseleave', startSlideInterval);
});

// 페이지 로드 시 처음 배너 이미지를 설정하고 자동 슬라이드 시작
updateBannerImage(currentIndex, 'next');
startSlideInterval();