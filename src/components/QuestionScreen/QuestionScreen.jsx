import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import data from '../../../questions/DotNet.json';

import './QuestionScreen.css';

function QuestionScreen() {
    const [randomQuestion, setRandomQuestion] = useState(null);
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);

    const generateRandom = () => {
        if (data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomItem = data[randomIndex];
            setQuestion(randomItem.question);
            setAnswers(randomItem.answers);
        }
    }

    useEffect(() => {
        generateRandom();
      }, []);

    
    return (
        <div className="question-container">
            <Container className="test">
                <div className="d-flex justify-content-center">
                    <div className="question">
                        <p>{question}</p>
                    </div>
                </div>
                <Row className="info-row">
                    <Col>.NET</Col>
                    <Col>1/x</Col>
                    <Col>Lab x</Col>
                </Row>
                <hr />
                <Row className="d-flex justify-content-center">
                    {
                        answers.map((e) => (
                            <Col className="mx-3 px-3 py-3 answer" xl={12}>{e}</Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default QuestionScreen;