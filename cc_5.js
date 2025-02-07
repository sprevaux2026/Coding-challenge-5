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
