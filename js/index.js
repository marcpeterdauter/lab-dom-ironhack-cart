// ITERATION 1

function updateSubtotal(product) {
  const price = Number(product.querySelector('.price span').innerHTML);
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  // const products = document.getElementsByClassName('product')
  //console.log(typeof products)

  const items = document.getElementsByClassName('product');
  let totalPrice = 0;

  for (let item of items) {
    totalPrice += updateSubtotal(item);
  }
  document.querySelector('#total-value span').innerHTML = totalPrice;

  // ITERATION 3
  //... your code goes here - already done
}

// ITERATION 4

//... your code goes here

// ITERATION 5

function createProduct() {
  //... your code goes here

  document.getElementById('create').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.create-product input');

    const newName = inputs[0].value;
    const newPrice = inputs[1].value;

    const newProduct = document.createElement('tr');
    newProduct.classList.add('product');
    newProduct.innerHTML = `<td class="name">
    <span>${newName}</span>
  </td>
  <td class="price">$<span>${newPrice}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`;

    const newTable = document.querySelector('tbody');
    newTable.appendChild(newProduct);

    newProduct
      .querySelector('.btn-remove')
      .addEventListener('click', removeProduct);
  });
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  createProduct();
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
});
