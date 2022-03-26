
let aboutUsContent = `<img src="../assets/Resume8.pdf"><br><img src="../assets/Resume2.pdf">`

function showAbout() {
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}



let aboutBTN = document.querySelector('#about');
aboutBTN.addEventListener('click', showAbout);

let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');








let supportersContent =
    `<div id="contact-box">
<div id="photo"><img src="../assets/Headshot.png"></div>
     <div id="contact-info">
     <h5>CONTACT</h5><br>
     <p>Phone  :  971-707-1419</p><br>
     <p>Email  :  Chodges00@gmail.com</p><br>
     <p>Github  :  @CHodges00</p><br>
     <p>LinkedIn  :  Cody Hodges</p>
     </div> 
      </div>`

function showSupporters() {
    $('body').toggleClass('bg')
    supportersPage.innerHTML = supportersContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}


let supportersBtn = document.querySelector('#supporters');
let supportersPage = document.querySelector('#main-page');

supportersBtn.addEventListener('click', showSupporters);