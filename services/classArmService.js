const runQuery = require("../Utils/dbUtils"); 

exports.getAllArms = async () => {
  const sql = 'SELECT * FROM tblclassarms';
  return await runQuery(sql, []);
};

exports.createArm = async (classId, classArmName) => {
  const isAssigned = '0';

  const checkExistingQuery = 'SELECT * FROM tblclassarms WHERE classArmName = ? AND classId = ?';
  const results = await runQuery(checkExistingQuery, [classArmName, classId]);

  if (results.length > 0) {
    return 'This ClassArm Already Exists!';
  } else {
    const insertQuery = 'INSERT INTO tblclassarms (classId, classArmName, isAssigned) VALUES (?, ?, ?)';
    await runQuery(insertQuery, [classId, classArmName, isAssigned]);
    return 'ClassArm created successfully';
  }
};

exports.updateClassArmDetails = async (armID, classID, classArmName) => {
  const updateQuery = 'UPDATE tblclassarms SET classId=?, classArmName=? WHERE Id=?';
  await runQuery(updateQuery, [classID, classArmName, armID]);
  return 'ClassArm updated successfully';
};

exports.deleteClassArm = async (armID) => {
  const deleteQuery = 'DELETE FROM tblclassarms WHERE Id=?';
  await runQuery(deleteQuery, [armID]);
  return 'ClassArm deleted successfully';
};
