function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartItems = [];
        snapshot.doc.forEach((doc) => {
    getItems.push({
        id: doc.id,
        ...doc.data()

            })
        })
        generateCartItems(cartItems);
    })
}

function generateCartItems(cartItems) {
    


`    <div class="cart-item flex items-center pb-4 border-b border-gray-200">
<div class="cart-item-image w-40 h-24 bg-white p-4 rounded-lg">
    <img class="w-full h-full object-contain" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418603_sd.jpg" alt="">
</div>
<div class="cart-item-details flex-grow">
    <div class="catr-item-title font-bold text-sm text-grey-600">Apple MacBook Pro 13,3</div>
    <div class="catr-item-brand text-sm text-gray-400 ">Apple</div>
</div>
<div class="cart-item-counter w-48 flex items-center">
    <div class="chevron-left cursor-pointer text-gray-400 bg-gray-100 h-6 w-6 rounded flex justify-center items-center hover:bg-gray-200 mr-2 "><i class="fas fa-chevron-left"></i></div>
    <h4 class="text-gray-400">x1</h4>
    <div class="chevron-right cursor-pointer text-gray-400 bg-gray-100 h-6 w-6 rounded flex justify-center items-center hover:bg-gray-200 ml-2"><i class="fas fa-chevron-right"></i>
</div>
</div>
<div class="cart-item-total-cost w-48 font-bold text-gray-400">$1,149.00</div>
<div class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400"><i class="fas fa-times"></i></div>


</div>`
}

getCartItems();