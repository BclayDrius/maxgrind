function includeLayout() {
    fetch("components/navbar.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("navbar").outerHTML = data;
        });

    fetch("components/footer.html")
        .then((res) => res.text())
        .then((data) => {
            document.getElementById("footer").outerHTML = data;
        });
}

window.addEventListener("DOMContentLoaded", includeLayout);
