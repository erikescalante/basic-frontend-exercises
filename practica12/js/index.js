const products = [
    {
        id: 1, 
        name: "laptop", 
        description: "1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 750, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XSqMQZ75T5sX8wgSBPO3ToWcDTiYKJ26k19ajlyP5Q&s=10"
    },
    {
        id: 2, 
        name: "headphones", 
        description: "2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 40,
        img: "https://m.media-amazon.com/images/I/61RahTQtAqL.jpg"
    },
    {
        id: 3, 
        name: "keyboard", 
        description: "3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 30, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZT5AvAYluws-20UwQJ1A4dvytKZvjZTaeOb9OVs5TBA&s=10"
    },
    {
        id: 4, 
        name: "speakers", 
        description: "4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 35, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGE0gUjMg70WmN1oOvrHIDjSZV6k0X5HSjdBBgf9Jrg&s=10"
    },
    {
        id: 5, 
        name: "cellphone", 
        description: "5Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 500, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_v38fvuQPnQymR2Fuyh_f2N2flWLBk_zTwernWUYVDg&s=10"
    },
    {
        id: 6, 
        name: "mouse", 
        description: "6Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui nulla, at in ducimus corporis modi tenetur suscipit accusamus?", 
        price: 20, 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1w2AhxY5az7ug6kpx4TuvahtJtu1LOW73d-zypeRPiw&s=10"
    }
];

const container = document.getElementById("cards-container");

for(const product of products) {
    let productCard = document.createElement("article");
    productCard.classList.add("card");

    let productName = document.createElement("h3");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    // let productDesc = document.createElement("p");
    // productDesc.textContent = product.description;
    // productCard.appendChild(productDesc);

    let productPrice = document.createElement("p");
    productPrice.textContent = "$ " + product.price;
    productCard.appendChild(productPrice);

    let productImage = document.createElement("img");
    productImage.src = product.img;
    productCard.appendChild(productImage);

    container.appendChild(productCard);
}