import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AddEditJob from "./components/AddEditJob";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<AddEditJob />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
