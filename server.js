const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes")

const app = express();
app.use("/api",contactRoutes)

const port = process.env.PORT;

app.listen(port, () => console.log(`server is running on port ${port}`))
