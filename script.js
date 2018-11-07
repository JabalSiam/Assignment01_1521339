var btn=document.getElementsByTagName("button");
 
var i;

for(i=0;i<btn.length;i++){
     
    btn[i].addEventListener("click",changeheadline);
}
function changeheadline(){
    var pghead= document.getElementById("headOfpage");
    pghead.innerHTML="You pressed a like a button.";
}
 
 