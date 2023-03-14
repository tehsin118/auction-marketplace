import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Artist from "./Pages/Artist";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Artist /> */}
    </div>
  );
}

export default App;
