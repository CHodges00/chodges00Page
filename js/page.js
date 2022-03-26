
let aboutUsContent = `<img src="../assets/Resume1.pdf"><br><img src="../assets/Resume2.pdf">`

function showAbout() {
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}



let aboutBTN = document.querySelector('#about');
aboutBTN.addEventListener('click', showAbout);

let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');