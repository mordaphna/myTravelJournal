//contactButton = document.querySelector("#contact button");

// contactButton.addEventListener("click", function contactClickhandler(el) {
//   alert("Not implemented");
// });




let button = document.getElementById('bntChangeColor');
changecolor = true;
button.addEventListener('click', function(){
  changecolor = !changecolor;
  
  if(changecolor){
    document.body.style.backgroundColor  = '#bb4779';
    
    document.body.style.color = 'white'
    let el = document.getElementsByTagName('p')
    let i
    for (i = 0; i < el.length; i++) {
        el[i].style.color = 'white';
    }
  }
  else{
    document.body.style.backgroundColor = '#fdb1d2';
    document.body.style.color = 'black';
    let el = document.getElementsByTagName('p')
    let i
    for (i = 0; i < el.length; i++) {
        el[i].style.color = 'black'
    }
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
  