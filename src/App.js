import { useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  const [vertical,setVertical]=useState("AirQualityMonitoring")
  return (
    <div className="flex flex-row">
      <Sidebar currentvertical={vertical} setVertical={setVertical} className="basis-1/3"/>
      <Home currentvertical={vertical}/>
    </div>
  );
}

export default App;
