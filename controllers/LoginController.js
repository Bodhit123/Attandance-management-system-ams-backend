const loginService = require("../services/login");

exports.loginController = async (req, res, next) => {
  const { userType } = req.params;

  try {
    const loginResult = await loginService(req.body, userType);
    res.status(200).send(loginResult);
  } catch (error) {
    console.error(error);
    res.send(error.message).status(error.statusCode);
  }
};
