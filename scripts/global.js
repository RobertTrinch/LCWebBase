/* Global Settings */

const settings = {
    title: "LC Web Base",
    description: "A boilerplate for my Leaving Cert web projects.",
    authors: ["Robert"],
    pages: [
        {
            title: "Home",
            file: "",
            visible: false,
        },
        {
            title: "Home",
            file: "index.html",
            visible: true,
        },
        {
            title: "Template Page",
            file: "template.html",
            visible: true,
        },
    ],
};

const currentPage = settings.pages.find(page => page.file === window.location.pathname.split("/").pop());
const currentTitle = currentPage ? currentPage.title + " - " + settings.title : settings.title;

// On launch
document.title = currentTitle; // Set page title to include page/project name
document.getElementById("javascript-warning").style.display = "none"; // Remove warning as javascript works
console.log("Javascript detected successfully")

// Replace variables on page
document.body.innerHTML = document.body.innerHTML.replaceAll("[global.title]", settings.title)
    .replaceAll("[global.description]", settings.description)
    .replaceAll("[global.authors]", settings.authors.join(", "))
    .replaceAll("[global.pageTitle]", currentPage.title);
console.log("Global variables replaced successfully");