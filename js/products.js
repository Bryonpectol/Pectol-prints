const products = [

  {
    "name":"Drummer Short Sleeve Tee",
    "price":"19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Guitar Short Sleeve Tee",
    "price":"19.98",
    "link":"https://www.etsy.com/listing/1632476013/guitar-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/1f67df/5586272750/il_640xN.5586272750_9zru.jpg",
  },
  {
    "name":"Evolution Guitar Short Sleeve Tee",
    "price":"19.98",
    "link":"https://www.etsy.com/listing/1618301300/evolution-guitar-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/a79197/5586257542/il_640xN.5586257542_mb6x.jpg",
  },
  {
    "name":"I'll be in the basement drummer NuBlend® Crewneck Sweatshirt",
    "price":"24.98",
    "link":"https://www.etsy.com/listing/1618295450/ill-be-in-the-basement-drummer-nublend",
    "image":"https://i.etsystatic.com/47668579/r/il/89f424/5634335217/il_640xN.5634335217_3f1u.jpg",
  },
  {
    "name":"May the Rhythm be with you NuBlend® Crewneck Sweatshirt",
    "price":"24.98",
    "link":"https://www.etsy.com/listing/1618293720/may-the-rhythm-be-with-you-nublend",
    "image":"https://i.etsystatic.com/47668579/r/il/b19ef4/5586227630/il_640xN.5586227630_1hc2.jpg",
  },
  {
    "name":"Squatchin' through the snow Short Sleeve Tee",
    "price":"19.98",
    "link":"https://www.etsy.com/listing/1632460775/squatchin-through-the-snow-short-sleeve",
    "image":"https://i.etsystatic.com/47668579/r/il/d89eed/5634314215/il_640xN.5634314215_2t9i.jpg",
  },
  {
    "name":"",
    "price":"24.98",
    "link":"https://www.etsy.com/listing/1618267812/hot-cocoa-vibes-nublend-crewneck",
    "image":"https://i.etsystatic.com/47668579/r/il/2d6483/5586126402/il_640xN.5586126402_49p4.jpg",
  },
  {
    "name":"",
    "price":"19.98",
    "link":"",
    "image":"",
  },
  {
    "name":"",
    "price":"19.98",
    "link":"",
    "image":"",
  },
  {
    "name":"",
    "price":"19.98",
    "link":"",
    "image":"",
  },
  {
    "name":"",
    "price":"19.98",
    "link":"",
    "image":"",
  },
  {
    "name":"",
    "price":"19.98",
    "link":"",
    "image":"",
  },
  
];


let Container = document.getElementById("container");

products.forEach(product => {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv";
  Link.className = "productlink";
  Image.className = "productimage";
  nameText.className = "productname";
  priceText.className = "productname";

  nameText.textContent = "" + product.name;
  priceText.textContent = "Price: $" + product.price;
  Link.setAttribute("href", product.link);
  Link.setAttribute("target", "_blank");
  Link.textContent = "View Product";
  Image.setAttribute("src", product.image);

  if(product.name != "" || product.link != "" || product.image != "") {
    Container.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
  
});
