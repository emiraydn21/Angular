const userService = require("./userService");

const getDataControllerfn = async (req, res) => {
  try {
    const employee = await userService.getDataFromDBService();
    res.send({ status: true, data: employee });
  } catch (error) {
    console.error('Error:', error);
    res.send({ status: false, message: 'An error occurred' });
  }
};

const createUserControllerFn = async (req, res) => {
  try {
    const status = await userService.createUserDBService(req.body);
    if (status) {
      res.send({ status: true, message: 'User created successfully' });
    } else {
      res.send({ status: false, message: 'Error creating user' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.send({ status: false, message: 'An error occurred' });
  }
};

const updateUserController = async (req, res) => {
  try {
    console.log(req.params.id);
    console.log(req.body);
    const result = await userService.updateUserDBService(req.params.id, req.body);
    if (result) {
      res.send({ status: true, message: 'User Updated' });
    } else {
      res.send({ status: false, message: 'User Update Failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.send({ status: false, message: 'An error occurred' });
  }
};

const deleteUserController = async (req, res) => {
  try {
    console.log(req.params.id);
    const result = await userService.removeUserDBService(req.params.id);
    if (result) {
      res.send({ status: true, message: 'User Deleted' });
    } else {
      res.send({ status: false, message: 'User Deletion Failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.send({ status: false, message: 'An error occurred' });
  }
};

module.exports = {
  getDataControllerfn,
  createUserControllerFn,
  updateUserController,
  deleteUserController,
};
