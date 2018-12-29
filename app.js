function openDash(dashName,elmnt,color) {
    var i, dashcontent, dashlinks;

    dashcontent = document.getElementsByClassName('dashcontent');
    for (i = 0; i < dashcontent.length; i++) {
        dashcontent[i].style.display = "none";
    }

    dashlinks = document.getElementsByClassName('dashlinks');
    for (i = 0; i < dashlinks.length; i++) {
        dashlinks[i].style.backgroundColor = "";
    }

    document.getElementById(dashName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// // get the element with id defaultOpen and click on it
// document.getElementById("defaultOpen").click();

function getUsername() {
  var user;
  var loginBtn = document.getElementById("loginBtn");
  var inputValue = prompt("Please Enter UserName:", "Username Here!");

  if (inputValue == null || inputValue == "") {
    user = "No User Selected!";
  } else {
    user = "Welcome Back, " + inputValue + "! " ;
  }
  document.getElementById("username").innerHTML = user;
}




































// function displayUser() {
//     document.getElementById('username').innerHTML =
//         document.getElementById('usernameInfo').value;
// }

// var username;
// var submitBtn;

// function getUser() {
//     username = document.getElementById('usernameInfo');
//     document.getElementById('username').innerHTML = value;

// }

// function loginBtn() {
//     submitBtn = documnt.getElementById('userBtn');
//     submitBtn.addEventListener('click');
// }
