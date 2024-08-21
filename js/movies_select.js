// 모든 커스텀 셀렉트 요소를 가져옴
const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach(customSelect => {
    const selected = customSelect.querySelector('.selected');
    const options = customSelect.querySelector('.options');
    const arrowIcon = selected.querySelector('.icoArrow img');

    // 셀렉트 박스를 클릭했을 때 옵션 표시/숨김
    selected.addEventListener('click', (event) => {
        event.stopPropagation(); // 클릭 이벤트가 상위로 전파되는 것을 방지
        const isOptionsVisible = options.classList.contains('show');
        
        // 모든 다른 셀렉트의 옵션을 닫기
        customSelects.forEach(select => {
            select.querySelector('.options').classList.remove('show');
            select.querySelector('.icoArrow img').classList.remove('rotated');
        });

        if (!isOptionsVisible) {
            options.classList.add('show');
            arrowIcon.classList.add('rotated');
        } else {
            options.classList.remove('show');
            arrowIcon.classList.remove('rotated');
        }
    });

    // 옵션을 클릭했을 때, 해당 값으로 선택
    options.querySelectorAll('li').forEach(option => {
        option.addEventListener('click', () => {
            selected.querySelector('span').textContent = option.textContent;
            options.classList.remove('show');
            arrowIcon.classList.remove('rotated');
        });
    });

    // 외부를 클릭했을 때 옵션 숨기기
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            options.classList.remove('show');
            arrowIcon.classList.remove('rotated');
        }
    });
});
