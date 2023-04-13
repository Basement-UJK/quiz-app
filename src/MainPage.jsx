import "./MainPage.css";
import CSharp from "./images/CSharp.png";
import Python from "./images/python.png";

import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="mainpage-container">
        <div className="dotnet-container">
          <div className="dotnet-image">
            <img className="dotnet-img" src={CSharp} alt="CSharp" />
          </div>
          <div className="dotnet-text">Technologie .Net</div>
          <a className="dotnet-button">Enter</a>
        </div>
        <div className="python-container">
          <div className="python-image">
            <img className="python-img" src={Python} alt="Python" />
          </div>
          <div className="python-text">Przetwarzanie obrazów</div>
          <a className="python-button">Enter</a>
        </div>
      </div>
      <Routes>
        <Route path="/python" element={<Home />} />
        <Route path="/dotnet" element={<Login />} />
      </Routes>
    </>
  );
};

export default MainPage;
