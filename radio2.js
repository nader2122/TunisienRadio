class Theme{
    constructor(){
this.color1=document.getElementById("color1");
this.color1.addEventListener("click",()=>{
   this.theme_color("color1");
});

this.color2=document.getElementById("color2");
this.color2.addEventListener("click",()=>{
   this.theme_color("color2");
});
this.color3=document.getElementById("color3");
this.color3.addEventListener("click",()=>{
   this.theme_color("color3");
});
this.color4=document.getElementById("color4");
this.color4.addEventListener("click",()=>{
   this.theme_color("color4");
});
this.color5=document.getElementById("color5");
this.color5.addEventListener("click",()=>{
   this.theme_color("color5");
});
if(localStorage.getItem("COLOR")==null){
    document.body.style.background="linear-gradient(to right, black, white)";
}
this.theme_color(localStorage.getItem("COLOR"));
    }
    theme_color(color){

if(color=="color1"){
    document.body.style.background="linear-gradient(to right, black, white)";
}
else if(color=="color2"){
    document.body.style.background="linear-gradient(to right, #212047, #30592d)";
}
else if(color=="color3"){
    document.body.style.background="linear-gradient(to right, #ff5722, #2a42c8bd)";
}
else if(color=="color4"){
    document.body.style.background="linear-gradient(to right,#826b5a, #c1d557)";
}
else if(color=="color5"){
    document.body.style.background="linear-gradient(to right,#ffeb3bc2,#ff5722bf)";
}

localStorage.setItem("COLOR",color);
}

    
}
onload = new Theme();