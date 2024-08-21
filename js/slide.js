let currentIndex = 0;
let slideInterval;
let isAnimatingBanner = false; // 배너 슬라이드 애니메이션 상태 플래그
let isAnimatingPoster = false; // 포스터 슬라이드 애니메이션 상태 플래그

const bannerImages = [
  './image/3idiots_banner.png',  
  './image/pasuggun_banner.jpg', 
  './image/everything_banner.jpg',  
  './image/mogadishu_banner.png',  
  './image/rrr_banner.jpg',  
  './image/urideul_banner.jpg',  
  './image/goodandbye_banner.jpg'  
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

const movieNameElement = document.getElementById('movieName');
const movieEngNameElement = document.getElementById('movieEngName');
const movieInfoElement = document.querySelector('.movie-info');

const bannerImageContainer = document.querySelector('.main-photo');
let bannerImage = document.querySelector('.main-slide-banner');
const container = document.querySelector('.slide-container');
const prev = document.querySelector('.btnleft');
const next = document.querySelector('.btnright');
let isAnimating = false; // 애니메이션 상태 플래그 변수

// 슬라이드 자동 재생을 중지하는 함수
function stopSlideInterval() {
  clearInterval(slideInterval);
}

// 슬라이드 자동 재생을 시작하는 함수
function startSlideInterval() {
  clearInterval(slideInterval); // 기존 인터벌을 먼저 정리
  slideInterval = setInterval(() => {
    changeSlide('next');
  }, 5000);
}

function updateBannerImage(index, direction) {
  if (isAnimatingBanner) return;
  isAnimatingBanner = true;
  
  const newImage = document.createElement('img');
  newImage.src = bannerImages[index];
  newImage.classList.add('main-slide-banner');
  newImage.style.left = direction === 'next' ? '100%' : '-100%';

  movieInfoElement.classList.remove('show');

  bannerImageContainer.appendChild(newImage);

  setTimeout(() => {
    newImage.style.left = '0';
    bannerImage.style.left = direction === 'next' ? '-100%' : '100%';

    newImage.addEventListener('transitionend', () => {
      bannerImageContainer.removeChild(bannerImage);
      bannerImage = newImage;

      movieNameElement.textContent = movieName[currentIndex];
      movieEngNameElement.textContent = movieEngName[currentIndex];

      setTimeout(() => {
        movieInfoElement.classList.add('show');
      }, 100);

      isAnimatingBanner = false;
    }, { once: true });
  }, 20);
}

// 포스터 슬라이드 제어 함수
function moveSlide(direction) {
  if (isAnimatingPoster) return;
  
  isAnimatingPoster = true; 

  const slides = document.querySelectorAll('.slide');
  if (direction === 'next') {
    container.append(slides[0]); 
  } else if (direction === 'prev') {
    container.prepend(slides[slides.length - 1]);
  }

  setTimeout(() => {
    isAnimatingPoster = false; 
  }, 1000); 
}

// 슬라이드를 동시에 변경하는 함수
function changeSlide(direction) {
  if (isAnimatingBanner || isAnimatingPoster) return;

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

  container.addEventListener('touchstart', function(event) {
      startX = event.touches[0].clientX;
  });

  container.addEventListener('touchmove', function(event) {
      currentX = event.touches[0].clientX;
  });

  container.addEventListener('touchend', function() {
      handleGesture();
  });

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
      const swipeThreshold = 50; 
      if (Math.abs(currentX - startX) > swipeThreshold) {
          if (currentX < startX) {
              changeSlide('next');
          } else if (currentX > startX) {
              changeSlide('prev');
          }
      }
  }
}

// 방향키로 슬라이드 제어
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    stopSlideInterval(); 
    changeSlide('prev');
    startSlideInterval();
  } else if (event.key === 'ArrowRight') {
    stopSlideInterval(); 
    changeSlide('next');
    startSlideInterval();
  }
});

// 다음 버튼 클릭 시
next.addEventListener('click', () => {
  stopSlideInterval(); 
  changeSlide('next');
  startSlideInterval();
});

// 이전 버튼 클릭 시
prev.addEventListener('click', () => {
  stopSlideInterval(); 
  changeSlide('prev');
  startSlideInterval();
});

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

const elementsToHover = [bannerImageContainer, container, prev, next];
elementsToHover.forEach(element => {
  element.addEventListener('mouseenter', stopSlideInterval);
  element.addEventListener('mouseleave', startSlideInterval);
});

// 페이지 로드 시 처음 배너 이미지를 설정하고 자동 슬라이드 시작
updateBannerImage(currentIndex, 'next');
startSlideInterval();

// 스와이프 기능 호출
handleSwipe();
