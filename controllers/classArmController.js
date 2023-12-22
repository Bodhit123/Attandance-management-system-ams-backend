const classArmService = require('../services/classArmService');

exports.getAllArmsController = async (req, res, next) => {
  try {
    const results = await classArmService.getAllArms();
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createArmController = async (req, res, next) => {
  const { classId, classArmName } = req.body;

  try {
    const result = await classArmService.createArm(classId, classArmName);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateClassArmDetailsController = async (req, res, next) => {
  const armID = req.params.id;
  const classID = req.body.classID;
  const classArmName = req.body.classArmName;

  try {
    const result = await classArmService.updateClassArmDetails(armID, classID, classArmName);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteClassArmController = async (req, res, next) => {
  const armID = req.params.id;

  try {
    const result = await classArmService.deleteClassArm(armID);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
