const nav = document.querySelector('nav');
fetch('./ssaflix-movie/navbar.html')
.then(res => res.text())
.then(data => nav.innerHTML = data);