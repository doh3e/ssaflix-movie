const header = document.querySelector('header');
const nav = document.querySelector('nav');

fetch('./header.html')
.then(res => res.text())
.then(data => header.innerHTML = data);

fetch('./navbar.html')
.then(res => res.text())
.then(data => nav.innerHTML = data);