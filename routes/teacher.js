const express = require("express");
const router = express.Router();

const {
    classAttendanceController,
    studentAttendanceController,
    fetchStudentsController,
    addStudentsAttendanceController,
    takeAttendanceController,
    subjectsByClassId,
    getall
  } = require("../controllers/AttendanceController");
  
  router.route("/getall/attendance").get(getall);
  router.route("/subjects/:id").get(subjectsByClassId);
  router.route("/view/students").post(fetchStudentsController);
  router.route("/class/attendance").post(classAttendanceController);
  router.route("/student/attendance").post(studentAttendanceController);
  router.route("/add/attendance").post(addStudentsAttendanceController);
  router.route("/take/attendance").post(takeAttendanceController);

  module.exports = router;