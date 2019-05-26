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
