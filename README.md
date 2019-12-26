# snaps-o-sill
A list with homemade schnaps and pickled herring made for Snapsakademien's dinners

## How to add recipe

In [recept.js](https://github.com/Snapsakademien/snaps-o-sill/blob/master/recept.js) add an entry to the `recept` array with the following format:

```javascript
{
title: "Name of thing",
group: "B1", // T1,T2,B1,B2
desc: "Long description",
ingredients: "Comma, seperated, ingredients",
imgUrl: "url/to/image.jpg" //snaps.jpg and sill.jpg are to be used as stock images
}
```

Upload a possible image to the [images folder](https://github.com/Snapsakademien/snaps-o-sill/tree/master/images) and reference it in the object.
