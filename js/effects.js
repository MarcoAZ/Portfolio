/**
 * Created by Zamora on 6/2/2017.
 */
var openIcon = "fa-arrow-circle-o-right";
var closeIcon = "fa-arrow-circle-right"

document.addEventListener("DOMContentLoaded", function (event) {
    //add click listeners for the Project boxes
    var projects = document.getElementsByClassName("prj-box");
    for(var i = 0; i < projects.length; i++)
        projects[i].addEventListener('click', function () {
            openProject(this, projects)
        }, false);

    //add hover listeners for the nav projects
    var navPrjs = document.getElementsByClassName("prj-list-item");
    for(var i = 0; i < navPrjs.length; i++)
        navPrjs[i].addEventListener('mouseenter', function () {
            changeIcon(this, navPrjs, "enter")
        }, false);

    for(var i = 0; i < navPrjs.length; i++)
        navPrjs[i].addEventListener('mouseleave', function () {
            changeIcon(this, navPrjs, "leave")
        }, false);
});

/*On click, the Box Shadow is removed, making sure to return shadows to other boxes*/
function openProject(prj, prjs) {
    // console.log(prj);
    //go through all other projects and make sure box shadow is active
    for(var i = 0; i < prjs.length; i++)if (prjs[i] != prj)
        prjs[i].classList.add("tri-shadow");

    prj.classList.remove("tri-shadow");
}

/*When the mouse enters, change to filled arrow. On leave, revert to open icon*/
function changeIcon(navItem, prjs, action) {
    //first child should be the icon we want to change
    // console.log(navItem.firstChild)
    if(action == "enter"){
        navItem.firstChild.classList.remove(openIcon);
        navItem.firstChild.classList.add(closeIcon);
    }
    else{
        navItem.firstChild.classList.add(openIcon);
        navItem.firstChild.classList.remove(closeIcon);
    }
}