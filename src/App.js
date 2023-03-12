import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AddEditJob from "./components/AddEditJob";

function App() {
  return (
    <Layout>
      <Home />
      <AddEditJob />
    </Layout>
  );
}

export default App;
