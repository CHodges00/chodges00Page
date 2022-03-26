
let aboutUsContent = `<img src="../assets/Resume6.jpg"><br><img src="../assets/Resume2.pdf">`

function showAbout() {
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}



let aboutBTN = document.querySelector('#about');
aboutBTN.addEventListener('click', showAbout);

let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');








let supportersContent = `<h5>CONTACT</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis dolorum enim, excepturi fugit maxime nemo reiciendis rerum totam! Voluptas.</p>`

function showSupporters() {
    supportersPage.innerHTML = supportersContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}


let supportersBtn = document.querySelector('#supporters');
let supportersPage = document.querySelector('#main-page');

supportersBtn.addEventListener('click', showSupporters);