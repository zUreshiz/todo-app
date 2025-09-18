import { Input } from "./ui/input";
import { Card } from "./ui/card";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../lib/axios";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Task ${newTaskTitle} add success`);

        //Hàm báo component cha để re-render. Hàm này truyền từ cha xuống con
        handleNewTaskAdded();
      } catch (error) {
        console.error("Error when add new task", error);
        toast.error("Error when add new task");
      }
      setNewTaskTitle("");
    } else {
      toast.warning("You should add new task");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="What do we need to do?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/50"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button
          variant="gradient"
          size="xl"
          className="px-6"
          onClick={addTask}
          disabled={!newTaskTitle.trim()}>
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
