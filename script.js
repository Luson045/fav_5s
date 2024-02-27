let showed=0;
function show(){
  if (showed==0){
    showed=1;
    let c=document.getElementById("content");
    c.style.display="flex";
    c.style.animationName="op";
    c.style.animationDuration="1s";
    document.getElementById("but").style.width="300px";
  }else{
    showed=0;
    let c=document.getElementById("content");
    c.style.display="none";
    c.style.animationName="op";
    c.style.animationDuration="1s";
    document.getElementById("but").style.width="40px";
  }
}