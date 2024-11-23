// async function getMenu() {
//     const menuList = document.getElementById('menu-items-list');

//     try {
//         const url = "foodMenu.json";
//         const response = await fetch(url);

//         const menu = await response.json();
        
//         menu.forEach((item) => {
//             const menuItem = document.createElement('div');
//             menuItem.classList.add('menu-item');
//             menuItem.innerHTML = `
//                                     <div class="food-img">
//                                         <img src="${item.imgSrc}" alt='food-item' />
//                                     </div>
//                                     <div class="item-main">
//                                         <div class="item-details">
//                                             <h3>${item.name}</h3>
//                                             <span class="item-price">$${item.price} / -</span>
//                                         </div>
//                                         <div>
//                                             <button class="add-to-cart">
//                                                 <img src="add-button-logo.svg" alt="add-logo" />
//                                             </button>      
//                                         </div>    
//                                     </div>
//                                  `;
//             menuList.insertAdjacentElement('beforeend', menuItem);
//         });
//     }
//     catch(err) {
//         console.log("Error : ", err);
//     }
// }

// function takeOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let orderObj = [{name: "Cheese Burger"}, {name: "Veggie Burger"}, {name: "Fish Burger"}];
//             resolve(orderObj);
//         }, 2500);
//     });
// }

// function orderPrep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//         }, 1500);
//     });
// }

// function payOrder() {

// }

// function thankyouFun() {

// }

// window.onload = getMenu;



// Sample function to get and display menu items from JSON
async function getMenu() {
    const menuList = document.getElementById('menu-items-list');

    try {
        const url = "foodMenu.json";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch menu');
        }

        const menu = await response.json();
        
        menu.forEach((item) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = ` 
                                    <div class="food-img">
                                        <img src="${item.imgSrc}" alt='food-item' />
                                    </div>
                                    <div class="item-main">
                                        <div class="item-details">
                                            <h3>${item.name}</h3>
                                            <span class="item-price">$${item.price} / -</span>
                                        </div>
                                        <div>
                                            <button class="add-to-cart">
                                                <img src="add-button-logo.svg" alt="add-logo" />
                                            </button>      
                                        </div>    
                                    </div>
                                 `;
            menuList.insertAdjacentElement('beforeend', menuItem);
        });
    } catch (err) {
        console.log("Error fetching menu:", err);
    }
}

// TakeOrder function - Returns a promise after selecting 3 random burgers
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderObj = [
                { name: "Cheese Burger" },
                { name: "Veggie Burger" },
                { name: "Fish Burger" }
            ];
            console.log('Order placed:', orderObj);
            resolve(orderObj);
        }, 2500);
    });
}

// Order Preparation - Returns a promise after 1.5 seconds
function orderPrep(orderObj) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating order preparation
            const orderStatus = { ...orderObj, order_status: true, paid: false };
            console.log('Order being prepared:', orderStatus);
            resolve(orderStatus);
        }, 1500);
    });
}

// Payment - Returns a promise after 1 second
function payOrder(orderStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulating payment process
            const updatedOrderStatus = { ...orderStatus, paid: true };
            console.log('Order paid:', updatedOrderStatus);
            resolve(updatedOrderStatus);
        }, 1000);
    });
}

// Thank you function - Displays an alert
function thankyouFnc() {
    alert('Thankyou for eating with us today!');
}

// Chaining the promises correctly and handling errors
async function processOrder() {
    try {
        const orderObj = await takeOrder();  // Step 1: Place the order
        const orderStatus = await orderPrep(orderObj);  // Step 2: Prepare the order
        const finalStatus = await payOrder(orderStatus);  // Step 3: Pay for the order
        thankyouFnc();  // Step 4: Show thank you message
    } catch (err) {
        console.log("Error during order process:", err);
    }
}

// Call the processOrder function when the page loads
window.onload = () => {
    getMenu();  // Fetch and display the menu
    processOrder();  // Process the order when the menu is displayed
};
