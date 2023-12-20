const { db } = require("../../config/database");

exports.getAllStudents = (req, res, next) => {
  const sql =
    "SELECT tblstudents.Id,tblclass.className,tblclassarms.classArmName,tblclassarms.Id AS classArmId,tblstudents.firstName,tblstudents.lastName,tblstudents.otherName,tblstudents.admissionNumber,tblstudents.dateCreated FROM tblstudents INNER JOIN tblclass ON tblclass.Id = tblstudents.classId INNER JOIN tblclassarms ON tblclassarms.Id = tblstudents.classArmId";
  db.query(sql, (err, results) => {
    res.status(200).send(results);
  });
};

exports.createStudent = (req, res, next) => {
  db.query(
    "select * from tblstudents where admissionNumber =?",
    [req.body.admissionNumber],
    (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.length > 0) {
        res.status(404).send("This Email Address Already Exists!");
      } else {
        db.query(
          "INSERT INTO tblstudents (firstName, lastName, otherName, admissionNumber, password, classId, classArmId, dateCreated) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
          [
            req.body.firstName,
            req.body.lastName,
            req.body.otherName,
            req.body.admissionNumber,
            req.body.password,
            req.body.classId,
            req.body.classArmId,
            req.body.dateCreated,
          ],
          (err, results) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).send("Student created successfully");
          }
        );
      }
    }
  );
};

exports.updateStudentDetails = (req, res, next) => {
  const studentID = req.params.id;
  db.query(
    "UPDATE tblstudents set firstName=?, lastName=?,otherName=?, admissionNumber=?,password=?, classId=?,classArmId=? where Id=?",
    [
      req.body.firstName,
      req.body.lastName,
      req.body.otherName,
      req.body.admissionNumber,
      req.body.password,
      req.body.classId,
      req.body.classArmId,
      req.body.dateCreated,
      studentID,
    ],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("Student updated successfully");
    }
  );
};

exports.deleteStudent = (req, res, next) => {
  db.query(
    "DELETE FROM tblstudents WHERE Id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("Student deleted successfully");
    }
  );
};
