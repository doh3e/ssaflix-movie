document.querySelector('.ticket-cont').addEventListener('mousemove', function(e) {
    const ticketCont = this;
    const ticket = document.querySelector('.ticket');
    const seals = document.querySelector('.seals');
  
    // 마우스의 위치를 계산
    const rect = ticketCont.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    // 카드의 중심에서의 상대적 위치를 계산
    const centerX = ticketCont.offsetWidth / 2;
    const centerY = ticketCont.offsetHeight / 2;
  
    const rotateX = (centerY - y) / centerY * 15; // X축 회전
    const rotateY = (x - centerX) / centerX * 15; // Y축 회전
  
    // 티켓과 씰을 3D 공간에서 함께 회전
    const transformValue = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    ticket.style.transform = transformValue;
    seals.style.transform = `${transformValue} translateY(-125%)`;
  
    // 빛 반사 효과 조정
    const brightness = 1.05 + Math.abs(rotateX / 30); // 기울기에 따른 밝기 조정 (기본값 1.05에서 시작)
    const contrast = 1.05 + Math.abs(rotateY / 30); // 기울기에 따른 대비 조정 (기본값 1.05에서 시작)
    seals.style.filter = `brightness(${brightness}) contrast(${contrast})`;
  });
  
  document.querySelector('.ticket-cont').addEventListener('mouseleave', function() {
    const ticket = document.querySelector('.ticket');
    const seals = document.querySelector('.seals');
  
    // 마우스가 떠나면 원래 상태로 돌아가기
    ticket.style.transform = 'rotateX(0) rotateY(0)';
    seals.style.transform = 'rotateX(0) rotateY(0) translateY(-125%)';
    seals.style.filter = 'brightness(1.05) contrast(1.05)';
  });
  