const Task = require("../models/Task");

/**
 * @description Get all tasks
 * @route GET /api/tasks
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(201).send(tasks);
  }
  catch (error) {
    return next(error);
  }
};

/**
 * @description Get a task
 * @route GET /api/tasks/:_id
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params._id);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.status(200).send(task);
  }
  catch (error) {
    return next(error);
  }
};

/**
 * @description Create a task
 * @route POST /api/tasks
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  }
  catch (error) {
    return next(error);
  }
};

/**
 * @description Update a task
 * @route PUT /api/tasks/:_id
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params._id, req.body, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  }
  catch (error) {
    return next(error);
  }
};

/**
 * @description Delete a task
 * @route DELETE /api/tasks/:_id
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params._id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  }
  catch (error) {
    return next(error);
  }
};

module.exports = { getTasks, getTask, createTask, updateTask, deleteTask };
