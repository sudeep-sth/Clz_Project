
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import bodyParser from "body-parser";
import user from "./routes/user.js";
import category from "./routes/category.js";
import product from "./routes/product.js";
import order from "./routes/order.js";
import sales from "./routes/sales.js";

import "./connection.js";
import userModel from "./models/user.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api/user", user);
app.use("/api/category", category);
app.use("/api/product", product);
app.use("/api/order", order);
app.use("/api/sales", sales);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// const func = async () => {
//     const reponse = await userModel.create({
//         username: "admin",
//         password: "admin",
//         firstName: "admin",
//         lastName: "admin",
//         email: "dhirn@email.com",
//         role: "admin",
//     });
//     console.log(reponse)
// }
// func()