// API URL
let API_URL = "https://fakestoreapi.com/products";

// DOM elements
let container = document.getElementById("productContainer");
let errorMsg = document.getElementById("errorMsg");

// Fetch products
fetch(API_URL)

    // Convert to JSON
    .then(response => {
        if(!response.ok){
            throw new Error("HTTP Error: " + response.status);
        }
        return response.json();
    })

    // Display products
    .then(products => {

        products.forEach(product => {

            // Create card
            let card = document.createElement("div");
            card.className = "product-card";

            // Image
            let img = document.createElement("img");
            img.src = product.image;
            img.alt = product.title;

            // Title
            let title = document.createElement("div");
            title.className = "product-title";
            title.textContent = product.title;

            // Append
            card.appendChild(img);
            card.appendChild(title);
            container.appendChild(card);
        });

    })

    // Error handling
    .catch(error => {
        console.error(error);
        errorMsg.textContent =
        "Failed to load products. Please check API or internet connection.";
    });
