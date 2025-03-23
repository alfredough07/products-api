// Mock data 

// Products
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "Over-ear noise cancelling headphones with 20 hour battery life",
    price: 129.99,
    category_id: 1,
    stock: 45,
    image: "headphones.jpg",
    rating: 4.5
  },
  {
    id: 2,
    name: "Smartphone Holder",
    description: "Adjustable smartphone holder for desk or bedside",
    price: 19.99,
    category_id: 1,
    stock: 78,
    image: "smartphone-holder.jpg",
    rating: 4.2
  },
  {
    id: 3,
    name: "Men's Running Shoes",
    description: "Lightweight running shoes with cushioned sole",
    price: 89.99,
    category_id: 2,
    stock: 32,
    image: "running-shoes.jpg",
    rating: 4.7
  },
  {
    id: 4,
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap",
    price: 29.99,
    category_id: 2,
    stock: 65,
    image: "yoga-mat.jpg",
    rating: 4.3
  },
  {
    id: 5,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe",
    price: 79.99,
    category_id: 3,
    stock: 28,
    image: "coffee-maker.jpg",
    rating: 4.0
  }
];

// Users
const users = [
  {
    id: 1,
    username: "johndoe",
    email: "john.doe@example.com",
    password: "hashed_password_here",
    first_name: "John",
    last_name: "Doe",
    address: "123 Main St, Anytown, AT 12345",
    role: "customer"
  },
  {
    id: 2,
    username: "janedoe",
    email: "jane.doe@example.com",
    password: "hashed_password_here",
    first_name: "Jane",
    last_name: "Doe",
    address: "456 Oak Ave, Sometown, ST 67890",
    role: "customer"
  }
];

// Carts
const carts = [
  {
    id: 1,
    user_id: 1,
    items: [
      {
        id: 1,
        product_id: 1,
        quantity: 1,
        price: 129.99
      },
      {
        id: 2,
        product_id: 5,
        quantity: 1,
        price: 79.99
      }
    ],
    total: 209.98
  },
  {
    id: 2,
    user_id: 2,
    items: [
      {
        id: 1,
        product_id: 3,
        quantity: 1,
        price: 89.99
      },
      {
        id: 2,
        product_id: 4,
        quantity: 1,
        price: 29.99
      }
    ],
    total: 119.98
  }
];

// Export only needed collections
module.exports = {
  products,
  users,
  carts
};