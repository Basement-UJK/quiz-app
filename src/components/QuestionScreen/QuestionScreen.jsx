import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './QuestionScreen.css';

function QuestionScreen() {
    return (
        <div className="question-container">
            <Container>
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
                    <Col className="mx-3 px-3 py-3 answer" xl={12}>A</Col>
                    <Col className="mx-3 px-3 py-3 answer" xl={12}>B</Col>
                    <Col className="mx-3 px-3 py-3 answer" xl={12}>C</Col>
                </Row>
            </Container>
        </div>
    );
}

export default QuestionScreen;