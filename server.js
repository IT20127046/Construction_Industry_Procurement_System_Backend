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
const sampleRoutes = require('./routes/sampleRoutes');
app.use(sampleRoutes);

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

const supplierRoutes = require('./routes/supplierRoutes');
app.use(supplierRoutes);

const supplierItemsRoutes = require('./routes/SupplierItemsRoute');
app.use(supplierItemsRoutes);

const tenderRoutes = require('./routes/tenderRoutes');
app.use(tenderRoutes);

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.listen(port, () => {
  console.log(`Server is started in port ${port}`);
});
