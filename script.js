function filterProducts() {
    const searchQuery = document.querySelector('#product-search').value.toLowerCase();
    const products = document.querySelectorAll('#product-list li');

    products.forEach((product) => {
        const title = product.querySelector('figcaption h4').textContent.toLowerCase();
        const description = product.querySelector('figcaption p').textContent.toLowerCase();

        if (title.startsWith(searchQuery) || description.startsWith(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}