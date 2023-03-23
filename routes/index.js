const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Error Response
router.use((req, res) => {
  return res.send("Please use correct route");
});

module.exports = router;
