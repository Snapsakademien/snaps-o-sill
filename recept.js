var recept = [
  {
    name: "B1 Special",
    group: "B1",
    desc:
      "Den här snapsen kan användas som biologisk krigsföring. Rekommenderas ej.",
    instructions: "",
    ingredients: ["Surströmming"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Julsill",
    group: "B1",
    desc:
      "Julsmak när den är som godast! Blanda glöggen och apelsinjuicen cirka 50/50, släng i kanelstängerna, lite nejlikor och saffran. Det kommer smaka så mycket jul så att du blir Arne Weise!",
    instructions: "",
    ingredients: ["Glögg", "apelsinjuice", "nejlikor", "saffran", "kanelstänger"],
    imgUrl:
      "https://mittkok.expressen.se/wp-content/uploads/2013/12/63cd1606-3931-4ddf-b111-96df9b439e1b-700x700.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Djävfulens kuk",
    group: "B2",
    desc: "Bra på pappret, men värdelös idé i övrigt. 2010.",
    instructions: "",
    ingredients: ["Jordgubbar", "citron"],
    imgUrl: "images/t-red.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Te-sprit",
    group: "B2",
    desc:
      "En snabblandad snaps för en stämma med dålig framförhållning. Tog kanske en halvtimme att göra. 2011.",
    instructions: "",
    ingredients: ["Påsar med te av blandad smak"],
    imgUrl:
      "https://assets.icanet.se/t_product_large_v1,f_auto/7311857510622.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Sillsnaps",
    group: "B1",
    desc: "Det bästa av två världar.",
    instructions: "",
    ingredients: ["Sill"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Snapssill",
    group: "B1",
    desc: "Det bästa av två världar fast åt andra hållet.",
    instructions: "",
    ingredients: ["Snaps"],
    imgUrl: "images/sill.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Hokkysnaps",
    group: "T1",
    desc:
      "Snaps med Hockeypulver för de dagar man känner sig lite extra brölig. Passar bra med en prilla i käften och slagsmål på isen.",
    instructions: "",
    ingredients: ["Hockeypulver"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Träsprit",
    group: "B2",
    desc:
      "Denna blev riktigt bra. Jag skulle nog kunna benämna den som mitt mästerverk. 2011.",
    instructions: "",
    ingredients: ["Mycket granskott", "tallbarr", "björknäver", "apsang-te"],
    imgUrl:
      "https://alternativbehandlingar.ifokus.se/u2/8f4ff3dedba21ae4fd2aef615f1bd9dc/default/spruce-2329909-960-720.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "B-röd",
    group: "B2",
    desc: "Ska enligt utsago smaka ljuvligt. 2010.",
    instructions: "",
    ingredients: ["Jordgubbar", "rosmarin"],
    imgUrl: "images/t-red.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Baconsnaps",
    group: "T2",
    desc: `Undertecknad, T2a, stod för tillverkningen. Har fina bilder på den hemmasnickrade etiketten. Recensioner gör ingen glad. Det finns inget gott att säga om den. 2011?`,
    instructions: `
    <ol>
    <li>Knaperstek en jäkla massa bacon.</li>
    <li>Lägg baconet på lite hushållspapper så en del av fettet rinner av åtminstone.</li>
    <li>Smula ner baconet i brännvinet.</li>
    <li>Vänta 3-4 veckor(?).</li>
    <li>Sila, först med fin sil och sedan genom kaffefilter, minst 5 vändor. Det är klart när det börjar bli klart, så att säga.</li>
    <li>Bjud dina kära Snapsakademiekollegor på det. Spelar ingen roll att det egentligen är otjänligt - det tar slut ändå.</li>
    </ol>`,
    ingredients: ["Knaperstekt bacon"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Framförallt stark",
    group: "B1",
    desc: "Habanerosnaps gjord av Bison 2014. 'Man sket blod i tre dagar'",
    instructions: "",
    ingredients: ["Habanero", "chili", "polkagris", "citronskal"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Papas pepparkakssnaps",
    group: "T2",
    desc:
      "Krossa pepparkakor i snapsen, sila ur det och smaka av med glögg. Felix Thiel och Papa.",
    instructions: "",
    ingredients: ["Pepparkakor", "glögg"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Mojitosill",
    group: "B1",
    desc:
      "Ger en väldigt fräsch smak. Myntan kan med fördel köras i mixer. Går även att slänga på en gnutta alkohol.",
    instructions: "",
    ingredients: ["Mynta", "lime", "sockerlag"],
    imgUrl: "images/sill.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Tvålsnaps",
    group: "B2",
    desc: "Ska ha smakat tvål enligt vissa. Maj 2019.",
    instructions: "",
    ingredients: ["Citronskal", "färska korianderblad"],
    imgUrl: "images/snaps.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  },
  {
    name: "Biltemasill",
    group: "B1",
    desc: "En sill som har gått till historien",
    instructions: "",
    ingredients: ["Korv", "ketchup"],
    imgUrl: "images/sill.jpg",
    ratingValue: "4.5",
    reviewCount: "11"
  }
];
