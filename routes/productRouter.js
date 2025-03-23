const express = require("express");
const productRouter = express.Router();
const { products } = require("../db.js");

// Middleware to check if the product exists
productRouter.param("id", (req, res, next, id) => {
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return res.status(404).send("Product with the given ID was not found");
  }
  req.product = product;
  next();
});
// GET all products
productRouter.get("/", (req, res) => {
  res.send(products);
});
// GET product by ID
productRouter.get("/:id", (req, res) => {
  res.send(req.product);
});
// POST new product
productRouter.post("/", (req, res) => {
  if (
    // Check if all fields are provided and are valid
    !req.body.name ||
    !req.body.description ||
    !req.body.price ||
    !req.body.category_id ||
    !req.body.stock ||
    !req.body.image ||
    !req.body.rating
  ) {
    return res.status(400).send("All fields are required");
  }

  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category_id: req.body.category_id,
    stock: req.body.stock,
    image: req.body.image,
    rating: req.body.rating,
  };

  products.push(newProduct);
  res.sendStatus(201);
});
// PUT product by ID
productRouter.put("/:id", (req, res) => {
  const product = req.product;
  Object.keys(req.body).forEach((key) => {
    if (product.hasOwnProperty(key)) {
      product[key] = req.body[key];
    }
  });
  res.send(product);
});
//  DELETE product by ID
productRouter.delete("/:id", (req, res) => {
  const index = products.indexOf(req.product);
  products.splice(index, 1);
  res.json({ message: "Product deleted" });
});

module.exports = productRouter;
