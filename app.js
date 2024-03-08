function hamburger(){
    var x=document.getElementById("nav-links");
    if(window.matchMedia(x.style.display === "none")){
       x.style.display = "flex";
        console.log("True");
    }else{
        console.log("Error");
    }
}