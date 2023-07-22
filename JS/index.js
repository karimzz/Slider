let containerWidth = document.querySelector(".slider-cotainer").clientWidth ;
let containerTotalWidth = document.querySelector(".slider-cotainer").scrollWidth ; 
let container = document.querySelector(".slider-cotainer") ; 


let cardClassName =document.querySelector(".slider-cotainer").children[0].classList.value ;
let cardWidth = document.querySelector(`.${cardClassName}`).clientWidth ; 
let numberOfCard = document.querySelectorAll(".card").length ; 


let counter = containerWidth ; 

let kCounter = 0 ; 


// For Show Arrow Button
checkArrowLeft()
if(containerWidth == counter  )
{
    document.querySelector(".ll").style.cssText = "display:none;"
}

function checkArrowRight()
{
    if(counter >= containerTotalWidth)
    {
        document.querySelector(".rr").style.cssText = `display: none ; `;
    }else{
        document.querySelector(".rr").style.cssText = `display: flex ; `;
    }
}

function checkArrowLeft()
{
    if(counter == containerWidth)
    {
        document.querySelector(".ll").style.cssText = `display : none ;`
    }else{
        document.querySelector(".ll").style.cssText = `display : flex ;`
    }
}


// For Right Event 
document.querySelector(".rr").onclick = ()=>{
    checkArrowRight() ;
    if(counter < containerTotalWidth)
    {
        counter += cardWidth ; 
        kCounter += cardWidth ;
        container.scrollTo(kCounter , 0) ;
    }
    else{
        console.log("No product More") ; 
    }
}



// For Left Event



// For Every Scroll Event
container.onscroll = (e)=>{
    checkArrowLeft()
    checkArrowRight()
}

