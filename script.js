//slider
var index=0;
var pic=$(".pictures");
turn(index);

function turns(numbers) {
  turn(index+=numbers);
}

function turn(a) {
  if (index<0){
    index=pic.length-1;
  }
  if (index>pic.length-1){
    index=0;
  }
  for (var i=0;i<pic.length;i++){
    pic[i].style.display="none";
  }
  pic[index].style.display="block";
}
setInterval(function () {
  turn(index+=1);
},5000);
//modal
/* document.getElementById("btn").onclick=function(){
  modal.style.display="block";

}
window.onclick=function(event){
  if (event.target.getAttribute("class")=='modal'){
    modal.style.display="none";
  }
}
document.getElementById("close").onclick=function(){
  modal.style.display="none";

}
*/
