let products = [
  {
    id: "0-0",
    name: "Anthony Davis Jersey",
    img: "images/anthony.jfif",
    tag: "Anthony Davis",
    price: 82,
    inCart: 0,
  },
  {
    id: "0-1",
    name: "Avery Bradley Jersey",
    img: "images/bradley.jfif",
    tag: "Avery Bradley",
    price: 105,
    inCart: 0,
  },
  {
    id: "0-2",
    name: "Danny Green Jersey",
    img: "images/green.jfif",
    tag: "Danny Green",
    price: 105,
    inCart: 0,
  },
  {
    id: "0-3",
    name: "Kyle Kuzuma Jersey",
    img: "images/kuzuma.jfif",
    tag: "Kyle Kuzuma",
    price: 99,
    inCart: 0,
  },
  {
    id: "0-4",
    name: "Lebron James Jersey",
    img: "images/lebron.jfif",
    tag: "Lebron James",
    price: 91,
    inCart: 0,
  },
  {
    id: "0-5",
    name: "Rajon Rondo Jersey",
    img: "images/rondo.jfif",
    tag: "Rajon Rondo",
    price: 66,
    inCart: 0,
  },
  {
    id: "0-6",
    name: "Lebron James Jersey",
    img: "images/james2.jfif",
    tag: "Lebron James Yellow",
    price: 80,
    inCart: 0,
  },
  {
    id: "0-7",
    name: "Kobe Bryant Jersey",
    img: "images/kobe.jfif",
    tag: "Kobe Bryan",
    price: 250,
    inCart: 0,
  },

];

let secondProducts = [
  {
    id: "1-0",
    name: "Wendell Carter Jersey",
    img: "images/carter.jfif",
    tag: "Anthony Davis",
    price: 82,
    inCart: 0,
  },
  {
    id: "1-1",
    name: "Derrick Rose Jersey",
    img: "images/rose.jfif",
    tag: "Derrick Rose",
    price: 80,
    inCart: 0,
  },
  {
    id: "1-2",
    name: "Coby White Jersey",
    img: "images/white.jfif",
    tag: "Danny Green",
    price: 105,
    inCart: 0,
  },
  {
    id: "1-3",
    name: "Shaquille Harrison Jersey",
    img: "images/harrison.jfif",
    tag: "Kyle Kuzuma",
    price: 99,
    inCart: 0,
  },
  {
    id: "1-4",
    name: "Zach lavine Jersey",
    img: "images/lavine.jfif",
    tag: "Lebron James",
    price: 91,
    inCart: 0,
  },
  {
    id: "1-5",
    name: "Lauri Markkanen Jersey",
    img: "images/wendell.jfif",
    tag: "Rajon Rondo",
    price: 66,
    inCart: 0,
  },
  {
    id: "1-6",
    name: "Scottie Pippen Jersey",
    img: "images/pippen.jfif",
    tag: "Rajon Rondo",
    price: 105,
    inCart: 0,
  },
  {
    id: "1-7",
    name: "Zach Lavine Black Jersey",
    img: "images/lavine2.jfif",
    tag: "Zach Lavine Black",
    price: 100,
    inCart: 0,
  },
];

async function getCartItems() {
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    var cartTag = document.getElementById("cartLenght");
    cartTag.innerHTML = array.length;
  }
}

async function fetchAllAdsFromLocalStorage() {
  let totalPrice = 0;
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    document.getElementById("priceContainer").className = "priceContainer";
    var cartTag = document.getElementById("cartLenght");
    cartTag.innerHTML = array.length;
    for (let index = 0; index < array.length; index++) {
      const data = array[index];
      var products = document.getElementById("cartProducts");
      var price = document.createTextNode(`£${data.price}`);
      var name = document.createTextNode(data.name);
      var Delete = document.createTextNode("Delete");
      var figure = document.createElement("figure");
      var img = document.createElement("img");
      var span = document.createElement("span");
      var span1 = document.createElement("span1");
      var span2 = document.createElement("span2");
      totalPrice = totalPrice + +data.price;
      figure.className = "cartItemRow";
      img.src = data.img;
      img.className = "cartItemImage";
      span2.setAttribute(
        "onclick",
        "deleteThisItemFromCart(this," + JSON.stringify(data) + ")"
      );
      span2.appendChild(Delete);
      products.appendChild(figure);
      figure.appendChild(img);
      figure.appendChild(span1);
      span1.appendChild(name);
      figure.appendChild(span);
      span.appendChild(price);
      figure.appendChild(span2);
    }
    document.getElementById("totalPrice").innerHTML = totalPrice;
  }
}

async function displayAllAds() {
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    var cartTag = document.getElementById("cartLenght");
    cartTag.innerHTML = array.length;
  }
  for (let index = 0; index < products.length; index++) {
    let data = products[index];
    var features = document.getElementById("features");
    var price = document.createTextNode(`£${data.price}`);
    var name = document.createTextNode(data.name);
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var h5 = document.createElement("h5");
    var h4 = document.createElement("h4");
    var button = document.createElement("button");
    let check = array?.length && array.find((e) => e.id === data.id);
    if (check) {
      var ADD = document.createTextNode("ADDED");
      button.className = "added-cart";
      button.setAttribute(
        "onclick",
        "deleteFromCart(this," + JSON.stringify(data) + ")"
      );
    } else {
      var ADD = document.createTextNode("ADD");
      button.className = "add-cart";
      button.setAttribute(
        "onclick",
        "addToCart(this," + JSON.stringify(data) + ")"
      );
    }
    figure.id = "adFigure";
    img.src = data.img;
    img.id = "adImage";
    button.appendChild(ADD);
    features.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(h5);
    h5.appendChild(price);
    figure.appendChild(h4);
    h4.appendChild(name);
    figure.appendChild(button);
  }
}

async function displayAllBullsAds() {
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    var cartTag = document.getElementById("cartLenght");
    cartTag.innerHTML = array.length;
  }
  for (let index = 0; index < secondProducts.length; index++) {
    let data = secondProducts[index];
    var features = document.getElementById("featuresBulls");
    var price = document.createTextNode(`£${data.price}`);
    var name = document.createTextNode(data.name);
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    var h5 = document.createElement("h5");
    var h4 = document.createElement("h4");
    var button = document.createElement("button");
    let check = array?.length && array.find((e) => e.id === data.id);
    if (check) {
      var ADD = document.createTextNode("ADDED");
      button.className = "added-cart";
      button.setAttribute(
        "onclick",
        "deleteFromCart(this," + JSON.stringify(data) + ")"
      );
    } else {
      var ADD = document.createTextNode("ADD");
      button.className = "add-cart";
      button.setAttribute(
        "onclick",
        "addToCart(this," + JSON.stringify(data) + ")"
      );
    }
    figure.id = "adFigure";
    img.src = data.img;
    img.id = "adImage";
    button.appendChild(ADD);
    features.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(h5);
    h5.appendChild(price);
    figure.appendChild(h4);
    h4.appendChild(name);
    figure.appendChild(button);
  }
}

addToCart = async (element, data) => {
  var cartTag = document.getElementById("cartLenght");
  var cartValue = cartTag.innerHTML;
  cartTag.innerHTML = +cartValue + 1;
  element.innerHTML = "ADDED";
  element.className = "added-cart";
  element.setAttribute(
    "onclick",
    "deleteFromCart(this," + JSON.stringify(data) + ")"
  );
  let array = [];
  let items = await localStorage.getItem("cartItems");
  if (items?.length) array = JSON.parse(items);
  array.push(data);
  localStorage.setItem("cartItems", JSON.stringify(array));
};

deleteFromCart = async (element, data) => {
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    var cartTag = document.getElementById("cartLenght");
    let filter = array.filter((e) => e.id !== data.id);
    cartTag.innerHTML = filter.length;
    localStorage.setItem("cartItems", JSON.stringify(filter));
  }
  var cartTag = document.getElementById("cartLenght");
  var cartValue = cartTag.innerHTML;
  cartTag.innerHTML = +cartValue - 1;
  element.innerHTML = "ADD";
  element.className = "add-cart";
  element.setAttribute(
    "onclick",
    "addToCart(this," + JSON.stringify(data) + ")"
  );
};

deleteThisItemFromCart = async (element, data) => {
  let array = await localStorage.getItem("cartItems");
  array = JSON.parse(array);
  if (array?.length) {
    var cartTag = document.getElementById("cartLenght");
    let filter = array.filter((e) => e.id !== data.id);
    cartTag.innerHTML = filter.length;
    localStorage.setItem("cartItems", JSON.stringify(filter));
  }
  window.location.reload();
};

ShowPicture = () => {
  let sizes = document.getElementsByClassName("sizes")
  let teamNames = document.getElementsByClassName("teamNames")
  let shirtPrice = document.getElementsByClassName("shirtPrice")
  let selectedSize;
  let selectedPrice;
  let array;
  let selectedTeamName;
  for (let i of shirtPrice) {
    if (i.checked) selectedPrice = i.value;
    console.log(i.value);
  }
  for (let i of sizes) {
    if (i.checked) selectedSize = i.value;
    console.log(i.value);
  }
  for (let i of teamNames) {
    if (i.checked) selectedTeamName = i.value;
    console.log(i.value);
  }
  if (selectedTeamName == "bulls") {
    array = secondProducts
  } else {
    array = products
  }

  let img = document.getElementById("formModlPopupImage")
  // let index = Math.floor(Math.random() * 6)
  let check = array && array.length && array.find(e => e.price == selectedPrice)
  if (check){

    img.src = check.img;
    document.getElementById("formModlPopupHide").id = "formModlPopup"
  } else{
    alert("Sorry No Tshirt found with this requirements")
  }

  document.getElementById("modelSize").innerHTML = `size: ${selectedSize}`
  document.getElementById("modelTeamName").innerHTML = `Category: ${selectedTeamName}`
  document.getElementById("modelPrice").innerHTML = `Price: ${selectedPrice}`
}

closeFormPopup = () => {
  document.getElementById("formModlPopup").id = "formModlPopupHide"

}