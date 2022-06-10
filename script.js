let c = document.getElementById("result");

 

function Flip(){
   
    let f = Math.floor(Math.random() * 2);
     
    if (f == 1) {
        c.style.opacity = "1";
        c.style.transition = "1.5s";  
        c.innerHTML = "You get Tails";
        
    }

    else {
        c.style.opacity = "1";
        c.style.transition = "1.5s";  
        c.innerHTML = "You get Heads";
       
    }

}


