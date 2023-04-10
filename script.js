function filterProducts() {
    //store search input and products
    const searchBox = document.querySelector('#search-box').value.toLowerCase();
    const products = document.querySelectorAll('#product-list li');

    //for each product of products query title, price, & description
    products.forEach((product) => {
        //store title, price, description
        const titleElement = product.querySelector('figcaption h4');
        const priceElement = product.querySelector('figcaption p.priceTag');
        const descriptionElement = product.querySelector('figcaption p');
        
        // check if title, price, and description elements exist before accessing their textContent property
        const title = titleElement ? titleElement.textContent.toLowerCase() : '';
        const price = priceElement ? priceElement.textContent.toLowerCase() : '';
        const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';

        //diplay block if search input matches
        if (title.includes(searchBox) || price.includes(searchBox) || description.includes(searchBox)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
