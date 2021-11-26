const express = require("express");
const {
  addfirstapiController,
  getfirstapiController,
  getfirstapiControllerById,
  editfirstapiController,
  deletefirstapiController,
} = require("../controller/firstapiController");

const router = express.Router();

router.get("/", getfirstapiController);
router.get("/:_id", getfirstapiControllerById);
router.post("/add", addfirstapiController);
router.put("/edit/:_id", editfirstapiController);
router.delete("/delete/:_id", deletefirstapiController);

module.exports = router;
