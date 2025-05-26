const hero = document.querySelector('.hero');
const cardsGrid = document.querySelector('.cards-grid-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        hero.classList.add('hidden');
        cardsGrid.classList.add('expanded');
    } else {
        hero.classList.remove('hidden');
        cardsGrid.classList.remove('expanded');
    }
});
function includeLayout() {
    fetch("../components/navbar.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("navbar").outerHTML = data;
        });

    fetch("../components/footer.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("footer").outerHTML = data;
        });
}

window.addEventListener("DOMContentLoaded", includeLayout);
