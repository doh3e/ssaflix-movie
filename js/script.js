const nav = document.querySelector('nav');
fetch('https://doh3e.github.io/web_project/navbar.html')
.then(res => res.text())
.then(data => nav.innerHTML = data);