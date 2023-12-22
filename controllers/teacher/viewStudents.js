const db = require("../../config/database");

exports.viewStudents = (req, res, next) => {
  const { classId, classArmId } = req.body;
  db.query(
    "SELECT tblclass.className,tblclassarms.classArmName,tblstudents.Id,tblstudents.firstName,tblstudents.lastName,tblstudents.otherName,tblstudents.admissionNumber FROM tblclassteacher INNER JOIN tblclass ON tblclassteacher.classId = tblclass.Id INNER JOIN tblclassarms ON tblclassteacher.classArmId = tblclassarms.Id INNER JOIN tblstudents ON tblclassteacher.classId = tblstudents.classId AND tblclassteacher.classArmId = tblstudents.classArmId WHERE tblclass.Id = ? AND tblclassarms.Id = ? ",
    [classId, classArmId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error occurred");
      } else if (results) {
        if (results.length === 0)
          res.status(404).send("No students exist in this class");
        else res.status(200).send(results);
      }
    }
  );
};
