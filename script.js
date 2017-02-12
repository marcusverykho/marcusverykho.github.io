/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("sidenav").style.display = "block";
    document.getElementById("sidenav").style.width = "100px";
    document.getElementById("nav").style.marginLeft = "100px";
    document.getElementById("test").style.marginLeft = "100px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidenav").style.display = "none";
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("nav").style.marginLeft = "0";
    document.getElementById("test").style.marginLeft = "0";
}

/* Transition for text in achievement */
var test = document.getElementsByClassName("clickable");
var award = document.getElementsByClassName("award");
var j;

for (j = 0; j < test.length; j++) {
  test[j].onclick = function() {
    this.classList.toggle("active");
    var info = this.nextElementSibling;
    if (info.style.maxHeight){  
  	  info.style.maxHeight = null;
    } else {
  	  info.style.maxHeight = info.scrollHeight + "px";
    }
    var award = this.previousElementSibling;
    award.classList.toggle("active2");
}
}


/* Mobile achievement */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panels = this.nextElementSibling;
    if (panels.style.maxHeight){
  	  panels.style.maxHeight = null;
    } else {
  	  panels.style.maxHeight = panels.scrollHeight + "px";
    } 
  }
}

/*Back to top in portfolio */
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
}); 

$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });

/* Back to top text disappear */
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.backtotop').fadeOut();
  } else {
    $('.backtotop').fadeIn();
  }
});


/*Contact form */
var fromValue=document.querySelector(".feedback-from");
var feedbackValue=document.querySelector(".feedback-content");
var nameField=document.querySelector("#nameinput");
var feedbackField=document.querySelector("#other-info");
var form=document.querySelector(".contact-form");
var feedbackPreview=document.querySelector(".feedback-preview");
var submitButton=document.querySelector(".submitbutton")
/* 
fromValue.textContent="Faduma Equal";
feedbackValue.textContent="Do you allow pets?"

*/
function completePreview(){
    fromValue.textContent=nameField.value;
    feedbackValue.textContent=feedbackField.value;
    feedbackPreview.className="feedback-preview show";
    if (form.checkValidity() === true){
        submitButton.className="submitButton show"
    }
}

/* call function
completePreview();
*/
/* Create event listener for changes to form */
form.addEventListener("change", completePreview, false);

