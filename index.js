//contactButton = document.querySelector("#contact button");

// contactButton.addEventListener("click", function contactClickhandler(el) {
//   alert("Not implemented");
// });




let button = document.getElementById('bntChangeColor');
changecolor = true;
let body = document.getElementById('screen');
let title = document.getElementById('title');
button.addEventListener('click', function(){
  changecolor = !changecolor;
  
  if(changecolor){
    body.style.backgroundColor  = '#bb4779';
    title.style.color = 'purple';
  }
  else{
    body.style.backgroundColor = '#a11351';
    title.style.color = 'white';
  }
});


function setVisibility(id) {
  if(document.getElementById('bt1').value=='Hide video'){
  document.getElementById('bt1').value = 'Show video';
  document.getElementById(id).style.display = 'none';
  }else{
  document.getElementById('bt1').value = 'Hide video';
  document.getElementById(id).style.display = 'inline';
  }
  }
  