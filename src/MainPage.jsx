import "./MainPage.css";
import CSharp from "./images/CSharp.png";
import Python from "./images/python.png";

import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import CSharpPage from "./CsharpPage";
import PythonPage from "./PythonPage";
import CsharpPage from "./CsharpPage";

const MainPage = () => {
  return (
    <>
      <div className="mainpage-container">
        <div className="dotnet-container">
          <div className="dotnet-image">
            <img className="dotnet-img" src={CSharp} alt="CSharp" />
          </div>
          <div className="dotnet-text">Technologie .Net</div>
          <Link className="dotnet-button" to="dotnet">
            Enter
          </Link>
        </div>
        <div className="python-container">
          <div className="python-image">
            <img className="python-img" src={Python} alt="Python" />
          </div>
          <div className="python-text">Przetwarzanie obrazów</div>
          <Link className="python-button" to="python">
            Enter
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/python" element={<PythonPage />} />
        <Route path="/dotnet" element={<CsharpPage />} />
      </Routes>
    </>
  );
};

export default MainPage;
