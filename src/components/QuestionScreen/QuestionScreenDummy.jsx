import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import data from '../../../questions/Python.json';

import './QuestionScreen.css';

function QuestionScreenDummy() {
    const [random, setRandom] = useState(null);
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [ex, setEx] = useState([]);
    const [allQuestions, setAllQuestions] = useState(data[0]);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [currentCorrect, setCurrentCorrect] = useState(null);
    const [counter, setCounter] = useState(0);
    const [end, setEnd] = useState(false);
    const [isCorrect, setIsCorrect] = useState(0);
    const [isClicked, setIsClicked] = useState({});
    const [zielony, setZielony] = useState({});


    useEffect(() => {
        getRandom();
        console.log("Call");
    }, []);

    // Losowanie i przypisywanie pytanie i odpowiedzi
    const getRandom = () => {
        const copy = [...allQuestions];
        const mozliwe = [];
        console.log(mozliwe);

        copy.forEach((item) => {
            if (!ex.includes(item.id)) {
                mozliwe.push(item);
                console.log(item.id);
            }
        });


        if (mozliwe.length > 0) {
            if (mozliwe.length === 1) {
                setEnd(true);
            }

            const randomIndex = Math.floor(Math.random() * mozliwe.length);
            setRandom(randomIndex);

            console.log("dl: " + mozliwe.length);

            setCurrentCorrect(mozliwe[randomIndex].correctAnswer);
            setQuestion(mozliwe[randomIndex].question);
            setAnswers(mozliwe[randomIndex].answers);
            setEx([...ex, mozliwe[randomIndex].id]);
            console.log(ex);
        }
    }

    // Zmienia counter i wywołuje useEffect
    const increment = () => {
        setCounter(prevCount => prevCount + 1);
    };

    // Naciśnięcie przycisku
    const checkAnswer = (index) => {

        setIsClicked((prevClicked) => {
            return { ...prevClicked, [index]: true }
        });

        setZielony((prevState) => {
            return { ...prevState, [index]: false }
        });

        console.log("index:" + index);

        // Poprawna
        if (index === currentCorrect) {
            setIsCorrect(1);
            setTimeout(() => {
                setIsCorrect(0);
                setIsClicked({});
                setCorrectAnswers(correctAnswers + 1);
                increment();
            }, "2000");
            // Niepoprawna
        } else {
            setIsClicked((prevClicked) => {
                return { ...prevClicked, [currentCorrect]: true }
            });

            setZielony((prevState) => {
                return { ...prevState, [currentCorrect]: true }
            });

            setIsCorrect(-1);
            setTimeout(() => {
                setIsCorrect(0);
                setIsClicked({});
                setZielony({});
                increment();
            }, "2000");
        }
    }

    useEffect(() => {
        if (end) {
            alert("Koniec testu, punkty: " + correctAnswers + "/44");
        }

        if (counter === 0) {
            console.log("zaprzestań");
        } else {
            getRandom();
        }
    }, [counter])

    return (
        <div className="question-container">
            <Container className="test">
                <div className="d-flex justify-content-center">
                    <div className="question">
                        <p>{question}</p>
                    </div>
                </div>
                <Row className="info-row">
                    <Col>Python</Col>
                    <Col></Col>
                    <Col>Kolokwium 1</Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    {
                        answers.map((e, index) => (
                            <Col key={e} className={isCorrect === 0 ? 'mx-3 px-3 py-3 answer-neutral'
                                : isCorrect === 1 && isClicked[index] ? 'mx-3 px-3 py-3 answer-correct'
                                    : isCorrect === -1 && isClicked[index] && zielony[index] ? 'mx-3 px-3 py-3 answer-correct'
                                        : isCorrect === -1 && isClicked[index] ? 'mx-3 px-3 py-3 answer-incorrect'
                                            : 'mx-3 px-3 py-3 answer-neutral'} xl={12} onClick={() => checkAnswer(index)}>{e}</Col>
                        ))
                    }
                </Row>
            </Container>
        </div >
    );
}

export default QuestionScreenDummy;