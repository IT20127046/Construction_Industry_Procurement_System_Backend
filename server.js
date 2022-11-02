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

const tenderRoutes = require("./routes/tenderRoutes");
app.use(tenderRoutes);

const itemDetailsRoutes = require("./routes/itemDetailsRouter");
app.use(itemDetailsRoutes);

const receivedOrderRoutes = require("./routes/receivedOrderRouter");
app.use(receivedOrderRoutes);


const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.listen(port, () => {
  console.log(`Server is started in port ${port}`);
});
