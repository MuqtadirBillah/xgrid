
const express = require("express");
const postController = require("../controllers/postController");
const verifyToken = require("../middlewares/verifyToken");
const postRouter = express.Router();

postRouter.route("/view").get(verifyToken, postController.getFollowedPost);

module.exports = postRouter;