const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { authorization } = require("../middleware/auth");

router.post("/register", userController.rgister);
router.post("/login", userController.login);
router.get("/me", authorization, userController.me);
router.get("/all-account", authorization, userController.allAccount);
router.get("/fetch-by-id/:_id", authorization, userController.getById);
router.patch("/update", authorization, userController.update);
router.delete("/remove", authorization, userController.remove);

module.exports = router;
