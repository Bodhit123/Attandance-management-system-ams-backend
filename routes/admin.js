const express = require("express");
const router = express.Router();
const {getAllStudents,createStudent,updateStudentDetails,deleteStudent} = require("../controllers/admin/createStudent")
const {getAllClasses,createClass,updateClassDetails,deleteClass} = require("../controllers/admin/createClass")
const {getAllArms,createArm,updateClassArmDetails,deleteClassArm} = require("../controllers/admin/createArm")

router.route("/student/getall").get(getAllStudents);
router.route("/student/create").post(createStudent);
router.route("/student/:id").put(updateStudentDetails).delete(deleteStudent);

router.route("/class/getall").get(getAllClasses);
router.route("/class/create").post(createClass);
router.route("/class/:id").put(updateClassDetails).delete(deleteClass);

router.route("/classarm/getall").get(getAllArms);
router.route("/classarm/create").post(createArm);
router.route("/classarm/:id").put(updateClassArmDetails).delete(deleteClassArm);

module.exports = router;