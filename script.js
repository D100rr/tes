const product = [
    {
        id: 0,
        brand: '',
        images: 'images/img-1.webp',
        title: 'Custom Fit Polo Bear Oxford Shirt',
        text: 'Blue polo with a classic cut. Made of smooth and soft cotton',
        price: '$99.00',
        discount: '-25%',
        oldPrice: '$132.00',
        choose: 'CHOOSE SIZE',
    },
    {
        id: 1,
        brand: '',
        images: 'images/img-2.webp',
        title: 'Custom Fit Polo Bear Oxford Shirt',
        text: 'Blue polo with a classic cut. Made of smooth and soft cotton',
        price: '$149.00',
        discount: '-25%',
        oldPrice: '$200.00',
        choose: 'CHOOSE SIZE',
    },
    {
        id: 2,
        brand: '',
        images: 'images/img-3.webp',
        title: 'Custom Fit Polo Bear Oxford Shirt',
        text: 'Blue polo with a classic cut. Made of smooth and soft cotton',
        price: '$89.00',
        discount: '-25%',
        oldPrice: '$120.00',
        choose: 'CHOOSE SIZE',
    },
    {
        id: 3,
        brand: '',
        images: 'images/img-4.webp',
        title: 'Custom Fit Polo Bear Oxford Shirt',
        text: 'Blue polo with a classic cut. Made of smooth and soft cotton',
        price: '$199.00',
        discount: '-25%',
        oldPrice: '$230.00',
        choose: 'CHOOSE SIZE',
    },
    {
        id: 4,
        brand: '',
        images: 'images/img-5.webp',
        title: 'Custom Fit Polo Bear Oxford Shirt',
        text: 'Blue polo with a classic cut. Made of smooth and soft cotton',
        price: '$49.00',
        discount: '-25%',
        oldPrice: '$70.00',
        choose: 'CHOOSE SIZE',
    },
];

const categories = [...new Set(product.map((item) => item))];

document.getElementsByClassName('main__content-clothes')[0].innerHTML = categories.map((item, index) => {
    let { images, brand, title, text, price, discount, oldPrice } = item;
    return `
    <div class="main__content-cloth">
        <img src="${images}" alt="" class="main__content-img">
        <div class="main__cloth-info">
            <p class="main__cloth-brand">${brand}</p>
            <h2 class="main__cloth-title">${title}</h2>
            <p class="main__cloth-text">${text}</p>
            <div class="main__clothPrice">
                <h2 class="main__cloth-price">${price}</h2>
                <span class="mian__cloth-discount">${discount}</span>
            </div>
            <p class="main__cloth-oldPrice">${oldPrice}</p>
            <h3 class="main__cloth-choose">CHOOSE SIZE</h3>
            <div class="main_cloth-btns">
                <button class="main_cloth-btn">S</button>
                <button class="main_cloth-btn">M</button>
                <button class="main_cloth-btn">L</button>
                <button class="main_cloth-btn">XL</button>
                <button class="main_cloth-btn">XXL</button>
            </div>
            <button class="main__cloth-btn" onclick="addtocart(${item.id})">ADD TO BAG</button>    
        </div>
    </div>
    `;
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({ ...categories.find(item => item.id === a) });
    displaycart();
}

function deElement(index) {
    cart.splice(index, 1);
    displaycart();
}

function displaycart() {
    let j = 0;
    if (cart.length === 0) {
        document.getElementsByClassName('main__content-item')[0].innerHTML = "Your cart is empty";
    } else {
        document.getElementsByClassName('main__content-item')[0].innerHTML = cart.map((item, index) => {
            let { images, title, price } = item;
            return `
            <div class='cart-item'>
                <div class='row-img'>
                    <img class='rowImg' src=${images}>
                </div>
                <p style='font-size: 12px;'>${title}</p>
                <h2 style='font-size: 15px;'>${price}</h2>
                <i class="fa-solid fa-trash" onclick='deElement(${index})'></i>
            </div>
            `;
        }).join('');
    }
}
