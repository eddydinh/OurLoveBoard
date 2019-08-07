
window.addEventListener('load', function load(event){
  var x = document.getElementsByClassName("tab-btn");
  for (i = 0; i < x.length; i++) {
      x[i].addEventListener('click', function(event){
          event.cancelBubble = true;
          openTab(event)});
         
     }
});
function openTab(e) {
  var targetId = e.target.id;
  var loginBtn = document.getElementById("login-btn");
  var signupBtn = document.getElementById("sign-up-btn");
  var bottomBorder = document.getElementsByClassName("bottom-border")[0];

  var tabName = targetId.replace(/-btn/i,"");
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  document.getElementById(tabName).style.display = "block"; 

  if(tabName == "login"){
      loginBtn.style.color = "#ff5d5d";
      signupBtn.style.color = "gray";
      bottomBorder.classList.remove("moveforward");
      bottomBorder.classList.add("movebackward");
  }else{
      loginBtn.style.color = "gray";
      signupBtn.style.color = "#ff5d5d"
      bottomBorder.classList.remove("movebackward");
      bottomBorder.classList.add("moveforward");
      
  }
}