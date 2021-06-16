window.addEventListener('load',() =>{
    const sounds= document.querySelectorAll(".sounds");
    const pads=document.querySelectorAll(".pad div");
    const visual=document.querySelector(".visual");
    const colors=["#60d395","#3b39b4"," #a33f60","#031d2e","#0a4985"];


    
    //Lets get going with the sounds
    pads.forEach((padd,index) =>{
        padd.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
            setTimeout(function(){
                sounds[index].pause();
                },2000);
            
           
        });
    });

    //create a function that makes bubbles.
    const createBubbles=(index)=>{
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    }

});

