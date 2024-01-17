document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => displayProducts(products))
        .catch(error => console.error('Error fetching products:', error));
});

function displayProducts(products) {
    const productListContainer = document.getElementById('product-list');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.classList.add("img_product");

        const title = document.createElement('h2');
        title.textContent = product.title;

        const price = document.createElement('p');             
        price.textContent = `$${product.price.toFixed(2)}`;

        productDiv.appendChild(img);
        productDiv.appendChild(title);
        productDiv.appendChild(price);

        productListContainer.appendChild(productDiv);
    });
}

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))