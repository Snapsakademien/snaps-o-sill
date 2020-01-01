function createCard(recept) {
  var color = "gray";
  var wrapper = document.getElementsByClassName("wrapper");
  switch (recept.group) {
    case "T1":
      color = "#FF585A"; //Red
      break;
    case "T2":
      color = "#66CAFF"; //Blue
      break;
    case "B1":
      color = "#622880"; //Purple
      break;
    case "B2":
      color = "#7BFF6B"; //Green
      break;
  }

  // Random in case two things have the same name
  var id = recept.name.replace(" ", "-") + Math.round(Math.random() * 10000);
  console.log();

  var htmlStr = `
    <div class='card ${id}'>
      <div class='image' style='background-image: url(${recept.imgUrl});'></div>
      <div class='footer'>
          <div class='cardHeader'>
            <p style='display: inline;'>${recept.name}</p>
            <p class='group' style='color: white; background-color: ${color}'>${recept.group}</p>
            <p class='description'>${recept.desc}</p>
          </div>
      </div>
    </div>
    <div class='overlay-bg disabled'>
        <div class='card expanded ${id}'>
            <div class='cross'>
                <span>+</span>
            </div>
            <div class='image' style='background-image: url(${recept.imgUrl}); background-size: cover;'></div>
            <div class='footer'>
        <div class='cardHeader'>
            <b>${recept.name}</b> 
            <p class='group' style='color: white; background-color: ${color}'>${recept.group}</p>
        </div>
        <p>Ingredienser: ${recept.ingredients}</p>
    <p class='description'>${recept.desc}</p></div></div>
        </div>
    </div>
    `;

  wrapper[0].insertAdjacentHTML("beforeend", htmlStr);

  document.querySelector(`.card.${id}`).addEventListener("click", function() {
    console.log("clicked");
    toggleOverlay(id);
  });

  document
    .querySelector(`.card.expanded.${id}`)
    .parentElement.addEventListener("click", function(e) {
      if (e.target == this) {
        toggleOverlay(id);
      }
    });

  document
    .querySelector(`.card.expanded.${id} > .cross`)
    .addEventListener("click", function() {
      console.log("clicked");
      toggleOverlay(id);
    });
}

for (var i = 0; i < recept.length; i++) {
  createCard(recept[i]);
}

function toggleOverlay(id) {
  var overlay = document.querySelector(`.expanded.${id}`).parentElement;
  overlay.classList.toggle("disabled");
}
