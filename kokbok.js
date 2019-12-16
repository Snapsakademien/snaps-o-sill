var recept = [{name: "B1 Special", 
             group: "B1", 
             desc: "Den här schnapsen är vidrig", 
             ingredients: "Brännvin, Surströmming", 
             imgUrl: "Moth.jpg"},
              {name: "Test", 
             group: "T1", 
             desc: "Test", 
             ingredients: "Test", 
             imgUrl: "meme.jpg"},
              {name: "Test", 
             group: "T1", 
             desc: "Test", 
             ingredients: "Test", 
             imgUrl: "meme.jpg"}
           ];


function createCard(recept){
    var color = "gray";
    var wrapper = document.getElementsByClassName("wrapper");
    switch(recept.group){
        case "T1": color = "red";
            break;
        case "T2": color = "blue";
            break;
        case "B1": color = "purple";
            break;
        case "B2": color = "magenta";
            break;
    }
    
    var htmlStr = "<div class='card'><div class='image' style='background-image: url("+recept.imgUrl+"); background-size: cover;'></div><div class='footer'><p class='cardHeader'><b>"+recept.name+"</b> <i style='color: "+color+"'>"+recept.group+"</i></p><p class='description'>"+recept.desc+"</p><p style='margin-top: 2rem'>Ingredienser: "+recept.ingredients+"</p></div></div>";
    
    
    wrapper[0].insertAdjacentHTML("beforeend", htmlStr);
}

for(var i = 0; i < recept.length; i++){
    createCard(recept[i]);
}
