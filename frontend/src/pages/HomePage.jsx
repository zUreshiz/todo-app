import { toast } from "react-toastify";
import AddTask from "../components/AddTask";
import DateTimeFilters from "../components/DateTimeFilters.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import StatsAndFilters from "../components/StatsAndFilters.jsx";
import TaskList from "../components/TaskList.jsx";
import TaskListPagination from "../components/TaskListPagination.jsx";
import React, { useEffect, useState } from "react";
import api from "../lib/axios";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTaskBuffer(res.data.tasks);
      setActiveTaskCount(res.data.activeCount);
      setCompleteTaskCount(res.data.completeCount);
      console.log(res.data.tasks);
    } catch (error) {
      console.log("Error data:", error);
      toast.error("Error tasks data");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTask = taskBuffer.filter((task) => {
    switch (filter) {
      case "active":
        return task.status === "active";
      case "completed":
        return task.status === "complete";
      default:
        return true;
    }
  });

  const handleTaskChange = () => {
    fetchTasks();
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Cotton Candy Sky Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(45deg, #FFB3D9 0%, #FFD1DC 20%, #FFF0F5 40%, #E6F3FF 60%, #D1E7FF 80%, #C7E9F1 100%)`,
        }}
      />
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />
          <AddTask handleNewTaskAdded={handleTaskChange} />
          <StatsAndFilters
            filter={filter}
            setFilter={setFilter}
            completedTasksCount={completeTaskCount}
            activeTasksCount={activeTaskCount}
          />
          <TaskList
            filteredTasks={filteredTask}
            filter={filter}
            handleTaskChanged={handleTaskChange}
          />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilters />
          </div>

          <Footer
            activeTasksCount={activeTaskCount}
            completedTasksCount={completeTaskCount}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
