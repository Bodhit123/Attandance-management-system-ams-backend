const {
    getAllStudents,
    createStudent,
    updateStudentDetails,
    deleteStudent,
  } = require('../services/studentService');
  
  exports.getAllStudentsController = async (req, res, next) => {
    try {
      const results = await getAllStudents();
      console.log(results)
      res.status(200).send(results);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.createStudentController = async (req, res, next) => {
    try {
      const message = await createStudent(req.body);
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.updateStudentDetailsController = async (req, res, next) => {
    const studentID = req.params.id;
    try {
      const message = await updateStudentDetails(studentID, req.body);
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  exports.deleteStudentController = async (req, res, next) => {
    const studentID = req.params.id;
    try {
      const message = await deleteStudent(studentID);
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  

// const studentService = require('../services/studentService');

// Controller for getting all students
// exports.getAllStudentsController = (req, res, next) => {
//   const callback = (err, results) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(results);
//     }
//   };

//   studentService.getAllStudents(callback);
// };

// Controller for creating a student
// exports.createStudentController = (req, res, next) => {
//   const studentData = req.body;

//   const callback = (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(result);
//     }
//   };

//   studentService.createStudent(studentData, callback);
// };

// Controller for updating student details
// exports.updateStudentDetailsController = (req, res, next) => {
//   const studentID = req.params.id;
//   const studentData = req.body;

//   const callback = (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(result);
//     }
//   };

//   studentService.updateStudentDetails(studentID, studentData, callback);
// };

// Controller for deleting a student
// exports.deleteStudentController = (req, res, next) => {
//   const studentID = req.params.id;

//   const callback = (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(result);
//     }
//   };

//   studentService.deleteStudent(studentID, callback);
// };
