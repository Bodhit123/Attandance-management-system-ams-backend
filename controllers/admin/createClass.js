const { db } = require("../../config/database");

exports.getAllClasses = (req, res, next) => {
  const sql = "SELECT * FROM tblclass";
  db.query(sql, (err, results) => {
    res.status(200).send(results);
  });
};

exports.createClass = (req, res, next) => {
  db.query(
    "select * from tblclass where className =?",
    [ req.body.className ],
    (err, results) => {
      if (err) res.status(500).send(err);
      else if (results.length > 0) {
        res.status(404).send("This ClassName Already Exists!");
      } else {
        db.query(
          "INSERT INTO tblclass (className) VALUES(?)",
          [ req.body.className ],
          (err, results) => {
            if (err) {
              res.status(500).send(err);
            }
            res.status(200).send("Class created successfully");
          }
        );
      }
    }
  );
};

exports.updateClassDetails = (req, res, next) => {
  const classID = req.params.id;
  db.query(
    "UPDATE tblclass set className=? where Id=?",
    [ classID ],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("Class updated successfully");
    }
  );
};

exports.deleteClass = (req, res, next) => {
  db.query(
    "DELETE FROM tblclass WHERE Id=?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send("Class deleted successfully");
    }
  );
};
