function hamburger(){
    var x=document.getElementById("nav-links");
    if(window.matchMedia(x.style.display === "none")){
       x.style.display = "flex";
        console.log("True");
    }else{
        console.log("Error");
    }
}

function vis_none(){
    var x=document.getElementById("nav-links");
    if(x.style.display === "flex"){
        x.style.display = "none";
        console.log("True");
    }else{
        console.log("Error");
    }
}