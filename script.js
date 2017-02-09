
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
var j, m;

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

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
}); 