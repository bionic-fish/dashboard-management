function viewDash(dashName,elmnt,color) {
    var i, dashcontent, dashlinks;

    dashcontent = document.getElementsByClassName('dashcontent');
    for (i = 0; i < dashcontent.length; i++) {
        dashcontent[i].style.display = "none";
    }

    dashlinks = document.getElementsByClassName('dashlinks');
    for (i=0; i < dashlinks.length; i++) {
        dashlinks[i].style.backgroundColor = "";
    }

    document.getElementById(dashName).style.display = "block";
    elmnt.style.backgroundColor = color;
}