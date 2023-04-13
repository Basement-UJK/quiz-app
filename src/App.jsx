import { useState } from "react";

import "./App.css";

import MainPage from "./MainPage";
import QuestionScreen from "./components/QuestionScreen/QuestionScreen";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="AppM">
      <QuestionScreen/>
    </div>
  );
}

export default App;
