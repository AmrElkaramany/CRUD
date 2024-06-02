var productNameInputs = document.getElementById('productName');
var productPriceInputs = document.getElementById('productPrice');
var productCategoryInputs = document.getElementById('productCategory');
var productDescriptionInputs = document.getElementById('productDescription');
var productContainer = [];
var updateBtn = document.getElementById('updateBtn');
var addBtn = document.getElementById('addBtn');

if (localStorage.getItem('products') == null) {
    productContainer = [];
}

else {
    productContainer = JSON.parse(localStorage.getItem('products'))
    displayProduct();
}



function addProduct() {
    var product = {
        name: productNameInputs.value,
        price: productPriceInputs.value,
        category: productCategoryInputs.value,
        description: productDescriptionInputs.value,
    }
    productContainer.push(product)
    localStorage.setItem('products', JSON.stringify(productContainer))
    clearForm()
    displayProduct()
}


function clearForm() {
    productNameInputs.value = null;
    productPriceInputs.value = null;
    productCategoryInputs.value = null;
    productDescriptionInputs.value = null;
}

function displayProduct() {
    var box = ''
    for (var i = 0; i < productContainer.length; i++) {
        box += ` <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td><button  onclick="setProduct(${i})" class="btn btn-outline-info">Update</button></td>
            <td><button onclick="deleteProduct(${i})"  class="btn btn-outline-danger">Delete</button></td>
          </tr > `
    }
    document.getElementById('tableData').innerHTML = box;
}



function deleteProduct(deletedIndex) {
    productContainer.splice(deletedIndex, 1)
    localStorage.setItem('products', JSON.stringify(productContainer))
    displayProduct();
}



function searchProduct(term) {
    var box = '';
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            box += `<tr>
                <td>${i}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].description}</td>
                <td><button onclick="setProduct(${i})" class="btn btn-outline-info">Update</button></td>
                <td><button onclick="deleteProduct(${i})"  class="btn btn-outline-danger">Delete</button></td>
              </tr> `
        }
    }
    document.getElementById('tableData').innerHTML = box;

}


var zzz;
function setProduct(params) {
    zzz = params;
    productNameInputs.value = productContainer[params].name;
    productPriceInputs.value = productContainer[params].price;
    productCategoryInputs.value = productContainer[params].category;
    productDescriptionInputs.value = productContainer[params].description;

    updateBtn.classList.remove('d-none');
    addBtn.classList.add('d-none');
}



function updateProduct(zzz) {
    productContainer[zzz].name = productNameInputs.value;
    productContainer[zzz].price = productPriceInputs.value;
    productContainer[zzz].category = productCategoryInputs.value;
    productContainer[zzz].description = productDescriptionInputs.value;
    displayProduct()
    clearForm()
    updateBtn.classList.add('d-none');
    addBtn.classList.remove('d-none');
    localStorage.setItem('products',JSON.stringify(productContainer))
}





var arr = [
    { name: 'apple', price: 4155, category: 'tv', description: 'good' },
    { name: 'tornado', price: 4155, category: 'tv', description: 'good' },
    { name: 'nokia', price: 4155, category: 'tv', description: 'good' },
    { name: 'tsohiba', price: 4155, category: 'tv', description: 'good' },
    { name: 'dell', price: 4155, category: 'tv', description: 'good' },
    { name: 'lenovo', price: 4155, category: 'tv', description: 'good' },
]


// console.log('web design and development'.toLowerCase().includes('and'.toLowerCase()));



