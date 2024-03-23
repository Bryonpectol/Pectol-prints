const products = [

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
