import "./MainPage.css";
import CSharp from "./images/CSharp.png";
import Python from "./images/python.png";

const MainPage = () => {
  return (
    <>
      <div className="mainpage-container">
        <div className="dotnet-container">
          <div className="dotnet-image">
            <img className="dotnet-img" src={CSharp} alt="CSharp" />
          </div>
          <div className="dotnet-text">Technologie .Net</div>
          <button className="dotnet-button">Enter</button>
        </div>
        <div className="python-container">
          <div className="python-image">
            <img className="python-img" src={Python} alt="Python" />
          </div>
          <div className="python-text">Przetwarzanie obrazów</div>
          <button className="python-button">Enter</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
