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
  getAllClassesASCController,
  createClassController,
  updateClassDetailsController,
  deleteClassController,
} = require("../controllers/classController");
const {
  getAllArmsController,
  getAllArmsByClassIdController,
  getByIdController,
  createArmController,
  updateClassArmDetailsController,
  deleteClassArmController,
} = require("../controllers/classArmController");
const { getAllArmsByClassId } = require("../services/classArmService");


router.route("/student/getall").get(getAllStudentsController);
router.route("/student/create").post(createStudentController);
router
  .route("/student/:id")
  .put(updateStudentDetailsController)
  .delete(deleteStudentController);

router.route("/class/getall").get(getAllClassesController);
router.route("/class/getallASC").get(getAllClassesASCController);
router.route("/class/create").post(createClassController);
router
  .route("/class/:id")
  .put(updateClassDetailsController)
  .delete(deleteClassController);

 
router.route("/classarm/getallByClassId").get(getAllArmsByClassId);
router.route("/classarm/getall").get(getAllArmsController);
router.route("/classarm/getById/:id").get(getByIdController);
router.route("/classarm/create").post(createArmController);
router
  .route("/classarm/:id")
  .put(updateClassArmDetailsController)
  .delete(deleteClassArmController);

module.exports = router;
