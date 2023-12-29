const runQuery = require("../../Utils/dbUtils");

exports.getAllTeachers = async () => {
  const sql = `SELECT 
  tblclassteacher.Id,
  tblclass.className,
  tblclassarms.classArmName,
  tblclassarms.Id AS classArmId,
  tblclassteacher.firstName,
  tblclassteacher.lastName,
  tblclassteacher.emailAddress,
  tblclassteacher.phoneNo,
  tblclassteacher.dateCreated
FROM 
  tblclassteacher
INNER JOIN 
  tblclass ON tblclass.Id = tblclassteacher.classId
INNER JOIN 
  tblclassarms ON tblclassarms.Id = tblclassteacher.classArmId`;

  return await runQuery(sql, []);
};

exports.createTeacher = async (teacherData) => {
  const checkExistingQuery =
    "SELECT * FROM tblclassteacher WHERE emailAddress = ?";
  try {
    const results = await runQuery(checkExistingQuery, [
      studentData.emailAddress,
    ]);
    if (results.length > 0) {
      return "This Email Address Already Exists!";
    } else {
      const insertQuery =
        "INSERT INTO tblclassteacher (firstName, lastName, otherName, emailAddress, password,phoneNo, classId, classArmId, dateCreated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      const result = await runQuery(insertQuery, [
        teacherData.firstName,
        teacherData.lastName,
        teacherData.otherName,
        teacherData.emailAddress,
        teacherData.password,
        teacherData.phoneNo,
        teacherData.classId,
        teacherData.classArmId,
        teacherData.dateCreated,
      ]);
      if (result) {
        const query = await runQuery(
          "update tblclassarms set isAssigned='1' where Id = ?",
          [teacherData.classArmId]
        );
        if (query) {
          return "Teacher created successfully";
        } else {
          return "An error Occurred.";
        }
      }
    }
  } catch (error) {
    throw error.sqlMessage;
  }
};

exports.deleteTeacher = async (teacherID) => {
  const deleteQuery = "DELETE FROM tblclassteacher WHERE Id=?";
  try {
    const result = await runQuery(deleteQuery, [teacherID]);

    if (deleteResult.affectedRows > 0) {
      return { success: true, message: "Teacher deleted successfully" };
    } else {
      return { success: false, message: "Teacher not found or not deleted" };
    }
  } catch (error) {
    throw new Error(`Error deleting teacher: ${error.message}`);
  }
};

// const { db } = require('../config/database');

// const runQuery = (sql, params, callback) => {
//   db.query(sql, params, (err, results) => {
//     callback(err, results);
//   });
// };

// exports.getAllStudents = (callback) => {
//   const sql =
//     "SELECT tblstudents.Id, tblclass.className, tblclassarms.classArmName, tblclassarms.Id AS classArmId, tblstudents.firstName, tblstudents.lastName, tblstudents.otherName, tblstudents.admissionNumber, tblstudents.dateCreated FROM tblstudents INNER JOIN tblclass ON tblclass.Id = tblstudents.classId INNER JOIN tblclassarms ON tblclassarms.Id = tblstudents.classArmId";
//   runQuery(sql, [], callback);
// };

// exports.createStudent = (studentData, callback) => {
//   const checkExistingQuery = 'SELECT * FROM tblstudents WHERE admissionNumber = ?';
//   runQuery(checkExistingQuery, [studentData.admissionNumber], (err, results) => {
//     if (err) {
//       callback(err, null);
//     } else if (results.length > 0) {
//       callback(null, 'This Email Address Already Exists!');
//     } else {
//       const insertQuery =
//         'INSERT INTO tblstudents (firstName, lastName, otherName, admissionNumber, password, classId, classArmId, dateCreated) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//       runQuery(
//         insertQuery,
//         [
//           studentData.firstName,
//           studentData.lastName,
//           studentData.otherName,
//           studentData.admissionNumber,
//           studentData.password,
//           studentData.classId,
//           studentData.classArmId,
//           studentData.dateCreated,
//         ],
//         (err, results) => {
//           if (err) {
//             callback(err,null);
//           } else {
//             callback(null, "Student created successfully");
//           }
//         }
//       );
//     }
//   });
// };

// exports.updateStudentDetails = (studentID, studentData, callback) => {
//   const updateQuery =
//     'UPDATE tblstudents SET firstName=?, lastName=?, otherName=?, admissionNumber=?, password=?, classId=?, classArmId=?, dateCreated=? WHERE Id=?';
//   runQuery(
//     updateQuery,
//     [
//       studentData.firstName,
//       studentData.lastName,
//       studentData.otherName,
//       studentData.admissionNumber,
//       studentData.password,
//       studentData.classId,
//       studentData.classArmId,
//       studentData.dateCreated,
//       studentID,
//     ],
//     (err) => {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, 'Student updated successfully');
//       }
//     }
//   );
// };

// exports.deleteStudent = (studentID, callback) => {
//   const deleteQuery = "DELETE FROM tblstudents WHERE Id=?";
//   runQuery(deleteQuery, [studentID], (err) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, "Student deleted successfully");
//     }
//   });
// };
