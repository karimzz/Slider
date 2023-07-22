let containerWidth = document.querySelector(".slider-cotainer").clientWidth ;
let containerTotalWidth = document.querySelector(".slider-cotainer").scrollWidth ; 
let container = document.querySelector(".slider-cotainer") ; 


let cardClassName =document.querySelector(".slider-cotainer").children[0].classList.value ;
let cardWidth = document.querySelector(`.${cardClassName}`).clientWidth ; 
let numberOfCard = document.querySelectorAll(".card").length ; 


let counter = containerWidth ; 

let kCounter = 0 ; 


// For Show Arrow Button
if(containerWidth >= (cardWidth * numberOfCard) )
{
    document.querySelector(".rr").style.cssText = "display:none;"
    document.querySelector(".ll").style.cssText = "display:none;"
}

function checkArrowRight()
{
    console.log("Arrow Right Invoked")
    if(counter >= containerTotalWidth)
    {
        document.querySelector(".rr").style.cssText = `display: none ; `;
    }else{
        document.querySelector(".rr").style.cssText = `display: flex ; `;
    }
}

function checkArrowLeft()
{
    if(counter >= containerTotalWidth)
    {
        document.querySelector(".ll").style.cssText = `display : none ;`
    }else{
        document.querySelector(".ll").style.cssText = `display : flex ;`
    }
}


// For Scroll Event 
document.querySelector(".rr").onclick = ()=>{
    checkArrowRight() ;
    if(counter < containerTotalWidth)
    {
        kCounter += cardWidth ;
        container.scrollTo(kCounter , 0) ;
    }
    else{
        console.log("No product More") ; 
    }
}


