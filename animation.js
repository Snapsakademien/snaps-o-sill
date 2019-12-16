var animationId;
var activeTarget;
var transitionElement;
document.querySelector(".wrapper").addEventListener('click', handleAnimation);


function handleAnimation(e){
    var element = e.target;
    activeTarget = e.target;
    if(element.className != "card"){
        return;
    }
    var startPos = element.getBoundingClientRect();

    // add final positioned element adn overlay

    document.body.insertAdjacentHTML("beforeend", "<div class='overlay-bg' style='opacity: 0;'><div style='opacity: 0;' class='card expanded'></div></div>");

    var overlay = document.querySelector('.overlay-bg');
    overlay.addEventListener('click', reverseAnimation, false);
    var expandedCard = overlay.children[0];

    var endPos = expandedCard.getBoundingClientRect();

    // render transition card
    transitionElement = document.createElement("div");
    transitionElement.className = "card transition";
    transitionElement.style = `height: ${startPos.height}; width: ${startPos.width}; top: ${startPos.top}; left: ${startPos.left}`;
    document.body.insertAdjacentElement("beforeend", transitionElement);

    var xScale = endPos.width / startPos.width;
    var yScale = endPos.height / startPos.height;

//divide by the scaling to get actual translation, as it apperntly also scales
    var xTranslate = (endPos.left- startPos.left)/xScale;
    var yTranslate = (endPos.top- startPos.top)/yScale;


//Fade out clicked card and fade in expanded

element.classList.remove('fadeInDelayed');
element.classList.add('fadeOut');

expandedCard.classList.remove('fadeOut');
expandedCard.classList.add('fadeInDelayed');

overlay.classList.remove('fadeOutDelayed');
overlay.classList.add('fadeIn');

//Transform card
    animationId = transitionElement.animate(
    [
        {
            opacity: 0,
            transform: `scaleX(1) scaleY(1) translateX(0px) translateY(0px)`
        },
        {
            opacity: 1,
            transform: `scaleX(1) scaleY(1) translateX(0px) translateY(0px)`
        },{
            opacity: 1,
            transform: `scaleX(${xScale}) scaleY(${yScale}) translateX(${xTranslate}px) translateY(${yTranslate}px)`
        }, {
            opacity: 0,
            transform: `scaleX(${xScale}) scaleY(${yScale}) translateX(${xTranslate}px) translateY(${yTranslate}px)`
        }
    ]
    , {
        duration: 600,
        fill: "forwards",
        easing: "ease-out"
    });
}


function reverseAnimation(e){
    var overlay = document.querySelector(".overlay-bg"); 

    animationId.onfinish = function(){
        console.log("FINISHED!");
        document.body.removeChild(overlay);
        document.body.removeChild(transitionElement);
        animationId.onfinish = 0;
    };

    overlay.classList.remove("fadeInDelayed");
    overlay.classList.add("fadeOut");

    activeTarget.classList.remove("fadeOut");
    activeTarget.classList.add("fadeInDelayed");
    animationId.reverse();
}