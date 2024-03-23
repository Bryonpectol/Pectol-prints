const products = [

  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Guitar Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632476013/guitar-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/1f67df/5586272750/il_640xN.5586272750_9zru.jpg",
  },
  {
    "name":"Evolution Guitar Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1618301300/evolution-guitar-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/a79197/5586257542/il_640xN.5586257542_mb6x.jpg",
  },
  {
    "name":"I'll be in the basement drummer NuBlend® Crewneck Sweatshirt",
    "price":"$24.98",
    "link":"https://www.etsy.com/listing/1618295450/ill-be-in-the-basement-drummer-nublend",
    "image":"https://i.etsystatic.com/47668579/r/il/89f424/5634335217/il_640xN.5634335217_3f1u.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
  },
  {
    "name":"Drummer Short Sleeve Tee",
    "price":"$19.98",
    "link":"https://www.etsy.com/listing/1632481103/drummer-short-sleeve-tee",
    "image":"https://i.etsystatic.com/47668579/r/il/caa43c/5586293150/il_640xN.5586293150_2sib.jpg",
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
  priceText.textContent = "Price: " + product.price;
  Link.setAttribute("href", product.link);
  Link.setAttribute("target", "_blank");
  Link.textContent = "View Product";
  Image.setAttribute("src", product.image);

  Container.appendChild(mainDiv);
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
  
});
