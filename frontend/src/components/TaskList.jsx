import TaskEmptyState from "../components/TaskEmptyState";
import TaskCard from "../components/TaskCard";
import React from "react";

const TaskList = () => {
  let filter = "all";

  const filteredTasks = [
    {
      _id: "1",
      title: "test",
      status: "active",
      completedAt: null,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "test 2",
      status: "completed",
      completedAt: new Date(),
      createdAt: new Date(),
    },
  ];

  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter}></TaskEmptyState>;
  }
  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <TaskCard key={task._id ?? index} task={task} index={index} />
      ))}
    </div>
  );
};
export default TaskList;
