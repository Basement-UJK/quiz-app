import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import CSharpPage from "./CsharpPage";
import PythonPage from "./PythonPage";
import MainPage from "./MainPage";
import QuestionScreen from "./components/QuestionScreen/QuestionScreen";

import "bootstrap/dist/css/bootstrap.min.css";
import QuestionScreenDummy from "./components/QuestionScreen/QuestionScreenDummy";


function App() {
  return (
    <div className="AppM">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/python" element={<PythonPage />} />
        <Route path="/dotnet" element={<CSharpPage />} />
        <Route path="/questionsnet" element={<QuestionScreen />} />
        <Route path="/questionspython" element={<QuestionScreenDummy />} />
      </Routes>
    </div>
  );
}

export default App;
