var numSection=1;//numéro de la section
var section=[document.getElementById("section1"),document.getElementById("section2"),document.getElementById("section3"),document.getElementById("section4"),document.getElementById("section5")];

var dy=[];
dy[1]=0;

for (var i=2;i<=section.length;i++) dy[i]=section[i-1].offsetTop-section[0].offsetTop;

 window.addEventListener("wheel", mouseWheelHandler);
 
 function mouseWheelHandler(e){
    e.preventDefault();
    var delta=e.deltaY;

    var doc= document.documentElement /*Chrome, Firefox, IE and Opera*/|| document.body; //  Safari
    if (delta>0) numSection++; else  numSection--;
    if (numSection<1) numSection=1;
    if (numSection>section.length) numSection=section.length;
    
    for(var j=1;j<=section.length;j++) if (numSection==j) doc.scrollTop=dy[j];   
 }