const express = require("express");

const { getTasks, getTask, createTask, updateTask, deleteTask } = require("../controllers/task");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(protect, getTasks);
router.route("/:_id").get(protect, getTask);
router.route("/").post(protect, createTask);
router.route("/:_id").put(protect, updateTask);
router.route("/:_id").delete(protect, deleteTask);

module.exports = router;
