const express = require("express");
const mongoose = require("mongoose");
const Suppliers = require("../models/supplierModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("express/lib/response");
const { v4: uuidv4 } = require("uuid");


process.env.SECRET_KEY = "secret2022";

//supplier registration with password encryption 
const supplierRegistration = (req, res) => {
  const current = new Date();
  let userData = {
    uid: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    password: req.body.password,
    dateRegistered: current,
  };

  Suppliers.findOne({
    name: req.body.name,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          // console.log("bcrypt")
          Suppliers.create(userData)
            .then((respond) => {
              //   console.log(res)

              res
                .status(200)
                .json({
                  success: "Registered successfully",
                })
                .end();
            })
            .catch((err) => {
              // console.log("catch")
              // res.status(400).send("error" + err).end();
              res.status(400).json({
                errorMessage: "Something went wrong!",
                status: false,
              });
              console.log("error: " + err);
            });
        });
      } else {
        return res.status(401).json({
          errorMessage:
            "Your user name is already registered. Use another user name",
          status: false,
        });
      }
    })
    .catch((err) => {
      // res.send("error" + err)
      res.status(400).json({
        errorMessage: "Something went wrong!",
        status: false,
      });
      console.log("error: " + err);
    });
};




//supplier login with jsonwebtoken 
const supplierLogin = function (req, res) {
    Suppliers.findOne({
      name: req.body.name,
    })
      .then((user) => {
        if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const payload = {
              _id: user._id,
              uid: user.uid,
              name: user.name,
              email: user.email,
              mobile: user.mobile,
              address: user.address,
              dateRegistered: user.dateRegistered,
            };
            const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
              expiresIn: 1440,
            });
            res.send(userToken);
          } else {
            // res.json({ error: "Please check your password and try again" })
            return res.status(401).json({
              errorMessage: "User unauthorized!",
              status: false,
            });
          }
        } else {
          // res.json({ error: "ID number is not registered in the system" })
          return res.status(401).json({
            errorMessage: "Your user name cannot be recognized",
            status: false,
          });
        }
      })
      .catch((err) => {
        // res.send("error" + err);
        res.status(400).json({
          errorMessage: "Something went wrong!",
          status: false,
        });
        console.log("error: " + err);
      });
  };


module.exports = {
    supplierRegistration,
    supplierLogin
    
  };