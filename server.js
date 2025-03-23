const express = require("express");
dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");
const userRouter = require("./routes/userRouter");

// Initialize express
const app = express();
dotenv.config();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
