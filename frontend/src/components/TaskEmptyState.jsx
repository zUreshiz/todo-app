import { Circle } from "lucide-react";
import { Card } from "../components/ui/card";
import React from "react";

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="space-y-3">
        <Circle className="size-12 mx-auto text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "active"
              ? "No quest working"
              : filter === "completed"
              ? "No quest completed"
              : "No quest"}
          </h3>

          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Add new quest"
              : `Move to 'All' to see quest ${
                  filter === "active" ? "completed" : "on working"
                }`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmptyState;
