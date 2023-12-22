const express = require("express");
const router = express.Router();
const {
  getAllStudentsController,
  createStudentController,
  updateStudentDetailsController,
  deleteStudentController,
} = require("../controllers/studentController");
const {
  getAllClassesController,
  createClassController,
  updateClassDetailsController,
  deleteClassController,
} = require("../controllers/classController");
const {
  getAllArms,
  createArm,
  updateClassArmDetails,
  deleteClassArm,
} = require("../controllers/admin/createArm");


router.route("/student/getall").get(getAllStudentsController);
router.route("/student/create").post(createStudentController);
router
  .route("/student/:id")
  .put(updateStudentDetailsController)
  .delete(deleteStudentController);

router.route("/class/getall").get(getAllClassesController);
router.route("/class/create").post(createClassController);
router.route("/class/:id").put(updateClassDetailsController).delete(deleteClassController);

router.route("/classarm/getall").get(getAllArms);
router.route("/classarm/create").post(createArm);
router.route("/classarm/:id").put(updateClassArmDetails).delete(deleteClassArm);

module.exports = router;
