/**
 * Created by Zamora on 6/2/2017.
 */
//class names for Font Awesome arrows in nav
var openIcon = "fa-arrow-circle-o-right";
var closeIcon = "fa-arrow-circle-right"

document.addEventListener("DOMContentLoaded", function (event) {
    //add click listeners for the Project boxes
    var projects = document.getElementsByClassName("prj-box");
    for(var i = 0; i < projects.length; i++)
        projects[i].addEventListener('click', function () {
            openProject(this, projects)
        }, false);

    //add click listeners for nav
    var navPrjs = document.getElementsByClassName("prj-list-item");
    for(var i = 0; i < navPrjs.length; i++)
        navPrjs[i].addEventListener('click', function () {
            openNavLink(this, projects);
        }, false);

    //add hover listeners for the nav projects
    for(var i = 0; i < navPrjs.length; i++)
        navPrjs[i].addEventListener('mouseenter', function () {
            changeIcon(this, "enter")
        }, false);

    for(var i = 0; i < navPrjs.length; i++)
        navPrjs[i].addEventListener('mouseleave', function () {
            changeIcon(this, "leave")
        }, false);
});

/*Description: On click, the Box Shadow is removed, making sure to return shadows to other boxes
* Params: the <li> that is clicked on; the list of all <li> projects
* Assumptions: first child of all prj has a class name that is used to find the content
*               content has a class of "(prj_class_name)-content"
**/
function openProject(prj, prjs) {
    var contentName = prj.firstChild.classList.toString() + "-content";
    var content = document.getElementsByClassName(contentName)[0];

    //go through all other projects and make sure box shadow is active and content is closed
    for(var i = 0; i < prjs.length; i++) {
        if (prjs[i] != prj)
        {
            prjs[i].classList.add("tri-shadow");
        }
    }

    var prjContent = document.getElementsByClassName("content-show")[0];

    //remove currently displayed content only if there was something displayed
    if(prjContent != undefined) {
        prjContent.classList.remove("content-show");
        prjContent.parentElement.setAttribute('style', 'display:none');
    }


    //close project instead if we are clicking the same project box
    if(prjContent == content)
    {
        prj.classList.add("tri-shadow");
        prjContent.classList.remove("content-show");
        //also close parent
        prjContent.parentElement.setAttribute('style', 'display:none');
    }
    else{ //remove drop shadow from requested project and show its content
        prj.classList.remove("tri-shadow");
        content.classList.add("content-show");
        //also open parent
        content.parentElement.setAttribute('style', 'display:block');
    }


}

/*Description: When the mouse enters, change to filled arrow icon. On leave, revert to open arrow icon
* Params: the <li> item being hovered over; the action (enter/leave)
* Assumptions: the first child of all nav items is the <i> element with the Font awesome icon;
*               Only actions are "enter" and "leave"
**/
function changeIcon(navItem, action) {
    if(action == "enter"){
        navItem.firstChild.classList.remove(openIcon);
        navItem.firstChild.classList.add(closeIcon);
    }
    else{
        navItem.firstChild.classList.add(openIcon);
        navItem.firstChild.classList.remove(closeIcon);
    }
}

/*Description: get the id of the nav item clicked and open the related project content
* Params: the <li> element clicked on in the nav; list of project square elements
* Assumptions: navItem has an id name that matches the class name for the requested project square*/
function openNavLink(navItem, prjs) {
    //send the requested project to be opened
    openProject(document.getElementsByClassName(navItem.id)[0].parentNode, prjs);
}