const navbar = document.createElement('nav');
const ul = document.createElement('ul');

ul.className = "navbar";

settings.pages.forEach(page => {
    if(page.visible === false) return; // Skip invisible pages
    const li = document.createElement('li');
    li.className = "navbar";
    const a = document.createElement('a');
    a.className = "navbar"
    a.href = page.file;
    a.textContent = page.title;
    // Highlight if current page
    if (window.location.pathname.endsWith(page.file.trim())) {
        a.classList.add('active');
    }
    li.appendChild(a);
    ul.appendChild(li);
});

const description = document.createElement('p');
description.id = "navbar-description";
description.textContent = settings.description;
ul.prepend(description);

const title = document.createElement('h2');
title.id = "navbar-title";
title.textContent = settings.title;
ul.prepend(title);


navbar.appendChild(ul);

// Add in the navbar to the page
document.head.innerHTML += '<link rel="stylesheet" href="styles/navbar.css">';
document.body.prepend(navbar); // to the top
console.log("Navbar created and added");
