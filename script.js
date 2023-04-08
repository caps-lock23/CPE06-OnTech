function filterProducts() {
    const searchBox = document.querySelector('#search-box').value.toLowerCase();
    const products = document.querySelectorAll('#product-list li');

    products.forEach((product) => {
        const title = product.querySelector('figcaption h4').textContent.toLowerCase();

        if (title.includes(searchBox)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}