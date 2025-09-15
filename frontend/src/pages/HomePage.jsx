import AddTask from "../components/AddTask";
import DateTimeFilters from "../components/DateTimeFilters.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import StatsAndFilters from "../components/StatsAndFilters.jsx";
import TaskList from "../components/TaskList.jsx";
import TaskListPagination from "../components/TaskListPagination.jsx";
import React from "react";

const HomePage = () => {
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
          <AddTask />
          <StatsAndFilters />
          <TaskList />
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-col">
            <TaskListPagination />
            <DateTimeFilters />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
