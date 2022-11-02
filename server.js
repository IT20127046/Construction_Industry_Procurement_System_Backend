const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//app middleware
app.use(bodyparser.json());
app.use(cors());

// Routes

const userRoutes = require("./routes/userRoutes");
app.use(userRoutes);

//Add supllier router
const supplierRoutes = require("./routes/supplierRoutes");
app.use(supplierRoutes);

//Add supllier Items router
const supplierItemsRoutes = require("./routes/SupplierItemsRoute");
app.use(supplierItemsRoutes);

//Manage tender router
const tenderRoutes = require("./routes/tenderRoutes");
app.use(tenderRoutes);

//Manage item details router
const itemDetailsRoutes = require("./routes/itemDetailsRouter");
app.use(itemDetailsRoutes);

//Manage received order router
const receivedOrderRoutes = require("./routes/receivedOrderRouter");
app.use(receivedOrderRoutes);

//Backend server running post number
const port = process.env.PORT || 5000;

//MongoDB database connection url
const uri = process.env.MONGO_URI;

//Build database connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

// Run backend server
app.listen(port, () => {
  console.log(`Server is started in port ${port}`);
});
