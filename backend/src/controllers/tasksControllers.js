import Task from "../model/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.log("getAllTasks Failed: ", error);
    res.status(500).json({ message: "System error" });
  }
};

export const createTask = (req, res) => {
  res.status(201).json({ message: "Quest add success" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Quest update success" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Quest delete success" });
};
