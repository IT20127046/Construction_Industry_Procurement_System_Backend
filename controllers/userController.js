/**
 * This controller is used hadnle functions(insert, retrive, update, delete) of user details
 * bcrypt package used for encypt user password
 * jwt paclkage used for create web token
 */

const express = require("express");
const mongoose = require("mongoose");
const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { type } = require("express/lib/response");
const { v4: uuidv4 } = require("uuid");

// Update user profile
const updateProfile = async (req, res) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
};

process.env.SECRET_KEY = "secret2022";

//user registration with password encryption - user
const userRegistration = (req, res) => {
  let userData = {
    userID: req.body.userID,
    nicNo: req.body.nicNo,
    password: req.body.password,
    userName: req.body.userName,
  };

  Users.findOne({
    name: req.body.name,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Users.create(userData)
            .then((respond) => {
              res
                .status(200)
                .json({
                  success: "Registered successfully",
                })
                .end();
            })
            .catch((err) => {
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
      res.status(400).json({
        errorMessage: "Something went wrong!",
        status: false,
      });
      console.log("error: " + err);
    });
};

//user login with jsonwebtoken - user
const userLogin = function (req, res) {
  Users.findOne({
    userID: req.body.userID,
  })
    .then((user) => {
      if (user) {
        if (user.nicNo === req.body.nicNo) {
          const payload = {
            _id: user._id,
            userID: user.userID,
            nicNo: user.nicNo,
            userName: user.userName,
          };
          const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });

          return res.status(200).json({
            success: true,
            userToken: userToken,
          });
        } else {
          return res.status(401).json({
            errorMessage: "User unauthorized!",
            status: false,
          });
        }
      } else {
        return res.status(401).json({
          errorMessage: "Your user name cannot be recognized",
          status: false,
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        errorMessage: "Something went wrong!",
        status: false,
      });
      console.log("error: " + err);
    });
};

//get a specific user
const getUser = function (req, res) {
  let userId = req.params.id;

  Users.findById(userId, (err, user) => {
    if (err) {
      return res.status(404).json({
        success: false,
        err,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
};

//get users - admin
const getUsers = function (req, res) {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
};

//get users by type - admin

const getUserByType = function (req, res) {
  let usertype = req.params.type;
  Users.find({ type: usertype }).exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
};

//update user - admin
const updateUser = function (req, res) {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
};

//delete user
const removeUser = (req, res) => {
  Users.findByIdAndDelete(req.params.id).exec((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.json({
      message: "Deleted succesfully",
      deletedUser,
    });
  });
};

//update user - user
const updatepassword = (req, res) => {
  Users.findOne({
    _id: req.body.uid,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.enteredPassword, user.password)) {
          bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
            const newData = {
              password: hash,
            };

            Users.findByIdAndUpdate(
              req.params.id,
              {
                $set: newData,
              },
              (err, user) => {
                if (err) {
                  return res.status(400).json({
                    error: err,
                  });
                }
                return res.status(200).json({
                  success: "Updated successfully",
                });
              }
            );
          });
        } else {
          return res.status(401).json({
            errorMessage: "Password not matched!",
            status: false,
          });
        }
      } else {
        return res.status(401).json({
          errorMessage: "Cannot find the user",
          status: false,
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        errorMessage: "Something went wrong!",
        status: false,
      });
      console.log("error: " + err);
    });
};

//update photo
const updatePhoto = async (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      user.file = req.file.originalname;

      user
        .save()
        .then(() => res.json("Photo Updated"))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = {
  userRegistration,
  userLogin,
  getUser,
  getUsers,
  getUserByType,
  updateUser,
  removeUser,
  updateProfile,
  updatepassword,
  updatePhoto,
};
