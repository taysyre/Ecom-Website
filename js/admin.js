
let products = JSON.parse(localStorage.getItem('products'))


let tableBody = document.querySelector('tbody.tb')
loadTable()
function loadTable() {
   tableBody.innerHTML = ''
   products.forEach(product => {
      tableBody.innerHTML += `
      <tr>
         <td><img src="${product.image}" style="width: 50px;"></td>
         <td>${product.title}</td>
         <td>R${product.price}</td>
         <td><button style="background-color: crimson;" onclick="delete(${product.id})">Delete</button></td>
      </tr>
      `

   })
};

function delete{

}