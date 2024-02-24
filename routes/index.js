const { Router: expressRouter } = require("express");
const router = expressRouter();

// post routes
const postRouter = require("./postRoutes");
router.use("/post", postRouter);

module.exports = router;


// more and more routers and controller can be defined and developed based on the requirements of the FileSystem. 