import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img src="404.png" alt="not found" className="max-w-full mb-6 w-96" />

      <p className="text-xl font-semibold">You've wrong site 🚫</p>

      <a
        href="/"
        className="inline-block px-6 py-3 mt-6 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark">
        Back to Home Page
      </a>
    </div>
  );
};

export default NotFound;
