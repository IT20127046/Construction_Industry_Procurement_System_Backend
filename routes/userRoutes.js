const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/userController");

// userRegistration
UserRouter.post("/user/registration", UserController.userRegistration);

// userLogin
UserRouter.post("/user/login", UserController.userLogin);

// GetAll
UserRouter.get("/users", UserController.getUsers);

// Get By ID
UserRouter.get("/user/:id", UserController.getUser);

//get users by type - admin
UserRouter.get("/users/:type", UserController.getUserByType);

// Update User
UserRouter.put("/user/update/:id", UserController.updateUser);

// Delete User
UserRouter.delete("/user/delete/:id", UserController.removeUser);

UserRouter.put("/profile/:id", UserController.updateProfile);

// update password
UserRouter.put("/user/updateprofile/:id", UserController.updatepassword);

module.exports = UserRouter;
