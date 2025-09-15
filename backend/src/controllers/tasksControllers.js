import Task from "../model/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = (await Task.find()).toSorted({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    console.log("getAllTasks Failed: ", error);
    res.status(500).json({ message: "System error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });

    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.log("createTask Failed: ", error);
    res.status(500).json({ message: "System error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, status, completedAt } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        completedAt,
      },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: " No quest found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.log("updatedTask Failed: ", error);
    res.status(500).json({ message: "System error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: " No quest found" });
    } else res.status(200).json(deletedTask);
  } catch (error) {
    console.log("updatedTask Failed: ", error);
    res.status(500).json({ message: "System error" });
  }
};
