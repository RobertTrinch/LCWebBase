/* Global Settings */

const settings = {
    title: "LC Web Base",
    description: "An over-complicated boilerplate for my Leaving Cert web projects.",
    authors: ["Robert"],
    pages: [
        {
            title: "Home",
            file: "index.html",
        },
        {
            title: "Template Page",
            file: "template.html",
        },
    ],
};

const currentPage = settings.pages.find(page => page.file === window.location.pathname.split("/").pop());
const currentTitle = currentPage ? currentPage.title + " - " + settings.title : settings.title;

/* On launch */
document.title = currentTitle; // set page title
document.getElementById("javascript-warning").style.display = "none"; // remove warning as javascript works

// make variables
document.body.innerHTML = document.body.innerHTML.replaceAll("[global.title]", settings.title)
    .replaceAll("[global.description]", settings.description)
    .replaceAll("[global.authors]", settings.authors.join(", "))
    .replaceAll("[global.pageTitle]", currentPage.title);

