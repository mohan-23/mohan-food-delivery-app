import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

// POST: http://localhost:4000/api/user/register
// POST: http://localhost:4000/api/user/login
// POST: http://localhost:4000/api/food/add
// POST: http://localhost:4000/api/food/remove
// GET:  http://localhost:4000/api/food/list
// POST: http://localhost:4000/api/cart/add
// POST: http://localhost:4000/api/cart/remove
// POST: http://localhost:4000/api/cart/get
// POST: http://localhost:4000/api/order/userorders
// GET:  http://localhost:4000/api/order/list
// POST: http://localhost:4000/api/order/status
