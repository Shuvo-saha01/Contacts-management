const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("../middleware/errorHandler");
const dbConnect = require("../config/dbConnection");

dbConnect(); 
const app = express();

app.use(express.json());
app.use("/api/contacts",contactRoutes)
app.use(errorHandler)

const port = process.env.PORT;

app.listen(port, () => console.log(`server is running on port ${port}`))
