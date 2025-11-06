import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouterConfig from "../config/reactrouter/routers.jsx";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterConfig /> {/* Must come *after* ToastContainer */}
    </>
  );
}

export default App;
