







// ADD RESUME IMG'S !!!!!!!!!!!!!!!!!!

// RESUME LINK FUNCTIONALITY
let aboutUsContent = `
<div id="about-content" >
<h1>Hello!</h1><br>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda, at aut beatae consequuntur cumque deleniti distinctio eligendi eos eveniet, facere fuga ipsum laborum libero maxime molestiae natus nihil quasi quibusdam quo rem similique temporibus veniam vitae voluptas voluptates voluptatibus?</p>

</div>
`

function showAbout() {
    $('body').css('background-color', 'grey');
    aboutPage.innerHTML = aboutUsContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}


let aboutBTN = document.querySelector('#about');
aboutBTN.addEventListener('click', showAbout);

let aboutPage = document.querySelector('#main-page');
let homeBTN = document.querySelector('#returnHome');







// CONTACT LINK FUNCTIONALITY
let supportersContent =
    `<div id="contact-box">
<!--<div id="photo"><img src="../assets/Headshot.png"></div>-->
     <div id="contact-info">
     <h5>CONTACT</h5><br><br>
     <p>Phone  :  971-707-1419</p><br>
     <p>Email  :  Chodges00@gmail.com</p><br>
     <p>Github  :  @CHodges00</p><br>
     <p>LinkedIn  :  Cody Hodges</p>
     <br><br>
     </div> 
      </div>`

function showSupporters() {
    $('body').css('background-color', 'grey');
    supportersPage.innerHTML = supportersContent;
    homeBTN.innerHTML = `<a href="#" onclick="location.reload()">Return Home</a>`
}


let supportersBtn = document.querySelector('#supporters');
let supportersPage = document.querySelector('#main-page');

supportersBtn.addEventListener('click', showSupporters);




