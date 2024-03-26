import { products } from "/data/productsdata.js";

// let Container = document.getElementById("container");


//   window.all = function() {

//     let allDiv = document.getElementById("all");

//     products.forEach(product => {

//       let mainDiv = document.createElement("div");
//       let nameText = document.createElement("p");
//       let priceText = document.createElement("p");
//       let Link = document.createElement("a");
//       let Image = document.createElement("img");
    
//       mainDiv.className = "productdiv";
//       Link.className = "productlink";
//       Image.className = "productimage";
//       nameText.className = "productname";
//       priceText.className = "productname";
    
//       nameText.textContent = "" + product.name;
//       priceText.textContent = "Price: $" + product.price;
//       Link.setAttribute("href", product.link);
//       Link.setAttribute("target", "_blank");
//       Link.textContent = "View Product";
//       Image.setAttribute("src", product.image);
    
//       if(product.name != "" || product.link != "" || product.image != "") {
//         allDiv.appendChild(mainDiv);
//       }
      
//       mainDiv.appendChild(nameText);
//       mainDiv.appendChild(Image);
//       mainDiv.appendChild(priceText);
//       mainDiv.appendChild(Link);

// });


// }



// window.music = function() {
//   let allDiv = document.getElementById("music");

//   products.forEach(product => {

//     if(product.category == "music") {

//     let mainDiv = document.createElement("div");
//     let nameText = document.createElement("p");
//     let priceText = document.createElement("p");
//     let Link = document.createElement("a");
//     let Image = document.createElement("img");
  
//     mainDiv.className = "productdiv";
//     Link.className = "productlink";
//     Image.className = "productimage";
//     nameText.className = "productname";
//     priceText.className = "productname";
  
//     nameText.textContent = "" + product.name;
//     priceText.textContent = "Price: $" + product.price;
//     Link.setAttribute("href", product.link);
//     Link.setAttribute("target", "_blank");
//     Link.textContent = "View Product";
//     Image.setAttribute("src", product.image);
  
//     if(product.name != "" || product.link != "" || product.image != "") {
//       allDiv.appendChild(mainDiv);
//     }
    
//     mainDiv.appendChild(nameText);
//     mainDiv.appendChild(Image);
//     mainDiv.appendChild(priceText);
//     mainDiv.appendChild(Link);
//   }

// });


// }
































let filterValue = document.getElementById("select");
  let value = filterValue.value;
  let text = filterValue.options[filterValue.selectedIndex].text;

  console.log("Text: " + text + " : Value: " + value);

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








  window.ffilter = function() {

  let searchDiv = document.getElementById("searchdiv");

      searchDiv.className = "searchdiv1";

  let filterBtn = document.getElementById("filterBtn");

  filterBtn.setAttribute("onclick", "ffilter1");

  let filterValue = document.getElementById("select");
  let value = filterValue.value;
  let text = filterValue.options[filterValue.selectedIndex].text;

  console.log("Text: " + text + " : Value: " + value);

  








      
  if(value == 0) {
  let Container = document.getElementById("container");

  products.forEach(product => {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
  
});
  }

  if(value == 1) {
  let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "music") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 2) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "christmas") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 3) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "thanksgiving") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 4) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "halloween") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 5) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "pickleball") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

}





window.ffilter1 = function() {

  let searchDiv = document.getElementById("searchdiv");
  searchDiv.className = "searchdiv1";
  
  Container.removeChild(mainDiv);

  let filterValue = document.getElementById("select");
  let value = filterValue.value;
  let text = filterValue.options[filterValue.selectedIndex].text;

  console.log("Text: " + text + " : Value: " + value);


  if(value == 0) {
  let Container = document.getElementById("container");

  products.forEach(product => {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
  
});
  }

  if(value == 1) {
  let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "music") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 2) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "christmas") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 3) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "thanksgiving") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 4) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "halloween") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

  if(value == 5) {
    let Container = document.getElementById("container");

  products.forEach(product => {

  if(product.category == "pickleball") {

  let mainDiv = document.createElement("div");
  let nameText = document.createElement("p");
  let priceText = document.createElement("p");
  let Link = document.createElement("a");
  let Image = document.createElement("img");

  mainDiv.className = "productdiv1";
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
    searchDiv.appendChild(mainDiv);
  }
  
  mainDiv.appendChild(nameText);
  mainDiv.appendChild(Image);
  mainDiv.appendChild(priceText);
  mainDiv.appendChild(Link);
}
  
});
  }

};
