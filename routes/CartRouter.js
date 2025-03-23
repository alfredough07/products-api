const express = require("express");
const cartRouter = express.Router();

const { carts } = require("../db");

cartRouter.param("id", (req, res, next, id) => {
  const cart = carts.find((cart) => cart.id === parseInt(id));
  if (!cart) return res.status(404).send("Cart not found.");
  req.cart = cart;
  next();
});

cartRouter.param("user_id", (req, res, next, user_id) => {
  const cart = carts.find((cart) => cart.user_id === parseInt(user_id));
  if (!cart) return res.status(404).send("Cart for this user not found.");
  req.cart = cart;
  next();
});

// GET cart by cart ID
cartRouter.get("/by-id/:id", (req, res) => {
  res.json(req.cart);
});

// GET cart by user ID
cartRouter.get("/user/:user_id", (req, res) => {
  res.json(req.cart);
});

// POST new cart
cartRouter.post("/", (req, res) => {
  const cart = {
    id: carts.length + 1,
    user_id: req.body.user_id,
    items: req.body.items || [],
    total: req.body.total || 0,
  };
  carts.push(cart);
  res.status(201).json(cart);
});

// POST item to user's cart
cartRouter.post("/user/:user_id/items", (req, res) => {
  const { product_id, quantity, price } = req.body;
  if (!product_id || !quantity || !price) {
    return res.status(400).send("Product ID, quantity and price are required.");
  }

  const newItem = {
    id: req.cart.items.length + 1,
    product_id,
    quantity,
    price,
  };

  req.cart.items.push(newItem);
  req.cart.total += price * quantity;
  res.status(201).json(req.cart);
});
module.exports = cartRouter;
