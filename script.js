function filterProducts() {
    //store search input and products
    const searchBox = document.querySelector('#search-box').value.toLowerCase();
    const products = document.querySelectorAll('#product-list li');

    //for each product of products query title, price, & description
    products.forEach((product) => {
        //store title, price, description
        const title = product.querySelector('figcaption h4').textContent.toLowerCase();
        const price = product.querySelector('figcaption p.priceTag').textContent.toLowerCase();
        const description = product.querySelector('figcaption p').textContent.toLowerCase();

        //diplay block if search input matches
        if (title.includes(searchBox) || price.includes(searchBox) || description.includes(searchBox)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}