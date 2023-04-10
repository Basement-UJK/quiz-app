import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './QuestionScreen.css';

function QuestionScreen() {
    return (
        <Container className="question-container">
            <div className="d-flex justify-content-center">
                <div className="question">
                    <p>Pytanie</p>
                </div>
            </div>
            <Row className="info-row">
                <Col>.NET</Col>
                <Col>1/x</Col>
                <Col>Lab x</Col>
            </Row>
            <hr />
            <Row className="d-flex justify-content-center">
                <Col className="answer" xl={12}>A</Col>
                <Col className="answer" xl={12}>B</Col>
                <Col className="answer" xl={12}>C</Col>
            </Row>
        </Container>
    );
}

export default QuestionScreen;