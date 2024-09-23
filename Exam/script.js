var openInbox = document.getElementById("myBtn");
openInbox.click();

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show"; 
    x.previousElementSibling.className += " bg-success text-light";
  } else { 
    x.className = x.className.replace(" w3-show", "");  
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" bg-success text-light", "");
  }
}

openMail("Borge")
function openMail(personName) {
  var i;
  var x = document.getElementsByClassName("person");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x = document.getElementsByClassName("test");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" bg-secondary text-light", "");
  }
  document.getElementById(personName).style.display = "block";
  event.currentTarget.className += " bg-secondary text-light";
}
 // Function to load content into the container
 function loadContent(Borge) {
  let item = null;
  for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i].id === id) {
      item = contentArray[i];
    }
  }
  if (item){
    document.getElementById('content').innerHTML = item.content;
  }
}