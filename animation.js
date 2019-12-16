var animationId;
document.querySelector(".wrapper").addEventListener('click', handleAnimation);


function handleAnimation(e){
    var element = e.target;
    if(element.className != "card"){
        return;
    }
    var startPos = element.getBoundingClientRect();

    // add final positioned element adn overlay

    document.body.insertAdjacentHTML("beforeend", "<div class='overlay-bg' style='visibility: hidden;opacity: 0;'><div class='card expanded'></div></div>");

    var overlay = document.querySelector('.overlay-bg');
    var expandedCard = overlay.children[0];
    console.log(expandedCard);
    var endPos = expandedCard.getBoundingClientRect();

    // render transition card
    var transitionElement = document.createElement("div");
    transitionElement.className = "card transition";
    transitionElement.style = `height: ${startPos.height}; width: ${startPos.width}; top: ${startPos.top}; left: ${startPos.left}`;
    document.body.insertAdjacentElement("beforeend", transitionElement);

    var xScale = endPos.width / startPos.width;
    var yScale = endPos.height / startPos.height;

//divide by the scaling to get actual translation, as it apperntly also scales
    var xTranslate = (endPos.left- startPos.left)/xScale;
    var yTranslate = (endPos.top- startPos.top)/yScale;

    console.log(xScale, yScale);


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
