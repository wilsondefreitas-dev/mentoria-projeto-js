//declarei uma constante e atribuit o valor que vem do productsList.js
const PRODUCTS_LIST = data;

//declarei uma função pra escrever os produtos dentro do elemento da lista de produtos
function writeProductsList() {
  //executei um loop dentro dos elementos da array de lista de produtos
  PRODUCTS_LIST.forEach(function (product) {
    //declarei uma constante e atribui o elemento do container dos produtos
    const PRODUCTS_CONTAINER_EL = document.getElementById("productsContainer");
    //declartei uma constante e atribui uma string contendo o conteúdo do elemento de produto
    const PRODUCT_EL = `
    <div class="product">
      <img class="product__image" src="${product.image}" />
      <div class="product__name">${product.name}</div>
      <div class="product__rating">${product.rating}</div>
      <div class="product__description">${product.description}</div>
      <div class="product__price">${product.price}</div>
      <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
    </div>`;

    //

    //insere o html em string dentro do nosso container
    insertHTML(PRODUCTS_CONTAINER_EL, PRODUCT_EL);
  });
}

//

//

function insertHTML(container, htmlValue) {
  container.innerHTML = container.innerHTML + htmlValue;
}

//

//

function addToCart(productId) {
  console.log("estou adicionando o produto:");
  console.log(productId);
}

//

//

//INIT ->
writeProductsList();
