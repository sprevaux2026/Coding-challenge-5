// Task 1: Object Properties - Customer Profile
let customer = {
    name: "Johnny Test",
    age: 15,
    email: "JohhnyTest@gmail.com"
};

// Log each property from above
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);

// Task 2: Object Methods - Order Details
let order = {
    orderId: 99999,
    totalAmount: 99,
    status: "Processing",
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`); //logged the info
    }
};

// Call the method to display order details
order.displayOrder();


// Task 3: Array Manipulation - Shopping Cart
let cartItems = ["Apple", "Orange", "Plum"]; // initial products

cartItems.push("Grape-Fruit");   // Add a new product at the end
cartItems.pop();    // Remove the last product
cartItems.unshift("Pear"); // Add a new product at the beginning
cartItems.shift();  // Remove the first product

console.log("Final Shopping Cart:", cartItems);

// Task 4: Map Method - Price Adjustments
let prices = [199, 299, 399];
let discountedPrices = prices.map(price => price * 0.9); // applying a 10% discount

console.log("Discounted Prices:", discountedPrices);

// Task 5: Filter Method - Product Availability
let inventory = [11, 12, 0, 0, 3];
let availableInventory = inventory.filter(quantity => quantity > 0); //Remove products with 0 left

console.log("Available Inventory:", availableInventory);

// Task 6: Reduce Method - Revenue Calculation
let sales = [999, 888, 777, 555];
let totalRevenue = sales.reduce((total, sale) => total + sale, 0); // Calculate total revenue

console.log("Total Revenue:", totalRevenue);

// Task 7: find() Method - Customer Search
let customers = ["Ben Ten", "Uncle Sam", "john Cena", "Walter White"];
let foundCustomer = customers.find(customer => customer === "Uncle Sam"); // Find a specific customer

console.log("Found Customer:", foundCustomer);

// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

let taxAmount = calculateTax(500, 0.07); // Calculate a $500 purchase with 7% tax
console.log(`Calculated Tax: $${taxAmount.toFixed(2)}`);

// Task 9: Function Expression - Discount Application
const applyDiscount = function(price, discount) {
    return price - (price * (discount / 100));
};

let newPrice = applyDiscount(900, 20); // $900 price with 20% discount
console.log(`Discounted Price: $${newPrice.toFixed(2)}`);

// Task 10: Arrow Function - Loyalty Points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);

let points = calculatePoints(250); // Calculate the points for a $250 purchase
console.log(`Loyalty Points Earned: ${points}`);
