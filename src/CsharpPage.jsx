import React from 'react';
import './PrzedmiotyPage.css';
import dupa from './images/CSharp.png'
import { Link } from 'react-router-dom';

// import { Link } from "react-router-dom";

function CsharpPage() {
  return (
    <div className="App">
      <header>

        <Link className="image-container" to="/">
          <img src={dupa} alt="C#" />
        </Link>

        <h1 className="centered">Techonolgie .net</h1>
        <hr className="header-line" />
      </header>
      <main className="main-background">

        <div className="quiz-buttonsrow">
          <button className="quiz-buttonfifty">Kolokwium 1</button>
          <button className="quiz-buttonfifty">Kolokwium 2</button>
        </div>
        <div className="quiz-buttons">
          <Link to="/questions">
            <button className="quiz-button">Laboratorium 1</button>
          </Link>
          <button className="quiz-button">Laboratorium 2</button>
          <button className="quiz-button">Laboratorium 3</button>
          <button className="quiz-button">Laboratorium 4</button>
        </div>
      </main>
    </div>
  );
}

export default CsharpPage;
