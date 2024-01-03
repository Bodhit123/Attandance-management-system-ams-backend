const teacherService = require("../../services/admin/teacherService");

exports.getAllTeachersController = async (req, res) => {
  try {
    const results = await teacherService.getAllTeachers();
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createTeacherController = async (req, res) => {
  const teacherData = req.body;
  try {
    const result = await teacherService.createTeacher(teacherData);

    if (result === "This Email Address Already Exists!") {
      // Handle the case where the student email already exists
      res.status(409).send(result); // 409 Conflict status code
    } else if (result === "Teacher created successfully") {
      // Student creation successful
      res.status(200).send(result);
    } else {
      // Unexpected response from the service
      res.status(500).send("Unexpected response from Service");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

exports.deleteTeacherController = async (req, res) => {
  const teacherID = req.params.id;
  try {
    const message = await deleteStudent(teacherID);

    if (message.success) {
      //successful deletion
      res.status(200).send(message);
    } else {
      //student not found or not deleted
      res.status(404).send(result.message);
    }
    res.status(200).send(message);
  } catch (error) {
    // Service threw an error
    res.status(500).send(error);
  }
};

