import { Input } from "./ui/input";
import { Card } from "./ui/card";
import React from "react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddTask = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="What do we need to do?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/50"
        />

        <Button variant="gradient" size="xl" className="px-6">
          <Plus className="size-5" />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
