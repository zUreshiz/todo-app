import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                You have done {completedTasksCount} task{" "}
                {activeTasksCount > 0 && `, ${activeTasksCount} task to do.`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Start do {activeTasksCount} task right now!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
