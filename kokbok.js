function createCard(recept) {
  var color = "gray";
  var wrapper = document.getElementsByClassName("wrapper");
  switch (recept.group) {
    case "T1":
      //Pink
      color = "#FF3BB4";
      break;
    case "T2":
      //Green
      color = "#4BFF3B";
      break;
    case "B1":
      //Blue
      color = "#2B92FF";
      break;
    case "B2":
      //Yellow
      color = "#FFB32B";
      break;
  }

  // Random in case two things have the same name
  var id = recept.name.replace(" ", "-") + Math.round(Math.random() * 10000);


  var recipe = {
      "@context": "http://schema.org",
      "@type": "Recipe",
      "author": recept.group+" i Snapsakademien",
      "description": recept.desc,
      "image": recept.imgUrl,
      "recipeIngredient": recept.ingredients,
      "name": recept.name,
      "recipeInstructions": recept.instructions,
      "recipieYield": "1 snaps",
      "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": recept.ratingValue,
          "reviewCount": recept.reviewCount
      }
  };
    
  if(recept.instructions === ""){
      delete recipe.recipeInstructions;
  }
  var ingredients = `<ul>
  ${recept.ingredients.map(ingr => `<li>${ingr}</li>`).join("")}
  </ul>`
    
  var htmlStr = `
    <script type='application/ld+json'>${JSON.stringify(recipe)}</script>
    <div class='card ${id}'>
      <div class='image' style='background-image: url(${recept.imgUrl}); background-size: cover;'>
        <div class='group' style='background-color: ${color};'>
          <p>${recept.group}</p>
        </div>
      </div>
      <div class='footer'>
          <div class='cardInfo'>
            <p style='display: inline; font-size: 1.5rem'>${recept.name}</p>
            <p class='description'>${recept.desc}</p>
          </div>
      </div>
    </div>
    <div class='overlay-bg disabled'>
        <div class='card expanded ${id}'>
            <div class='cross'>
                <span>+</span>
            </div>
            <div class='image' style='background-image: url(${recept.imgUrl}); background-size: cover;'>
                <div class='group' style='background-color: ${color}'>
                    <p>${recept.group}</p>
                </div>
            </div>
            <div class='footer'>
                <div class='cardInfo'>
                    <p style='display: inline; font-size: 1.5rem'>${recept.name}</p>
                    <p>Ingredienser:</p>
                    ${ingredients}
                    ${recipe.recipeInstructions ? `<p>Instruktioner: ${recept.instructions}</p>` : ''}
                    <p class='description'>${recept.desc}</p>
                </div>
            </div>
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

  document.querySelector(`.card.expanded.${id} > .cross`).addEventListener("click", function() {
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
