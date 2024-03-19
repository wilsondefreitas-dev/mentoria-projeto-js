console.log("hello world!");

const product = {
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ledv24Z_KT1KdbUFMsL4B0_dMPUaOUS0WBP3FWZsl1Nn1yZTrBI7F35jVrMyVC59NWA&usqp=CAU",
  name: "Prancha Lost",
  rating: 4.5,
  description: "Prancha maneira e barata",
  price: 200.2,
};

//

function fillElement(className) {
  const classSufix = "product__";
  const fullClassName = classSufix + className;

  const htmlList = document.getElementsByClassName(fullClassName);
  const element = htmlList[0];

  if (className === "image") {
    element.src = product.image;
  } else {
    element.innerText = product[className];
  }
}

//

fillElement("name");
fillElement("rating");
fillElement("description");
fillElement("price");
fillElement("image");

//1. nome da função
//2. class do elemento
//3. qual atributo do produto
