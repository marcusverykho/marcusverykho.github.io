
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
