const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/student.controller");
const validate = require("../middlewares/validateObjectId");

router.post("/", ctrl.create);
router.get("/", ctrl.getAll);
router.get("/search", ctrl.search);
router.get("/top", ctrl.top);
router.get("/stats/avg", ctrl.avg);

router.get("/:id", validate, ctrl.getById);
router.put("/:id", validate, ctrl.update);
router.delete("/:id", validate, ctrl.delete);
router.patch("/:id/score", validate, ctrl.updateScore);

module.exports = router;