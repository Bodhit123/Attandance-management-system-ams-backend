const { db } = require("../../config/database");

exports.getAllArms = (req, res, next) => {
  const sql = "SELECT * FROM tblclassarms";
  db.query(sql, (err, results) => {
    res.status(200).send(results);
  });
};

exports.createArm = (req, res, next) => {
const {classId,classArmName} = req.body;
const isAssigned = "0";

  db.query(
    "select * from tblclassarms where classArmName =? and classId=?",
    [ classArmName,classId ],
    (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.length > 0) {
        res.status(404).send("This ClassArm Already Exists!");
      } else {
        db.query(
          "INSERT INTO tblclassarms (classId,classArmName,isAssigned) VALUES(?,?,?)",
          [ classId,classArmName,isAssigned ],
          (err, results) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).send("ClassArm created successfully");
          }
        );
      }
    }
  );
};

exports.updateClassArmDetails = (req, res, next) => {
  const ID = req.params.id;
  db.query(
    "UPDATE tblclassarms set classId=?,classArmName=? where Id=?",
    [req.body.classID,req.body.classArmName,ID],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("Class updated successfully");
    }
  );
};

exports.deleteClassArm = (req, res, next) => {
  db.query(
    "DELETE FROM tblclassarms WHERE Id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("ClassArm deleted successfully");
    }
  );
};
