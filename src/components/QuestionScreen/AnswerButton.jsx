import { Col } from 'react-bootstrap';
import './AnswerButton.css';
import { useState } from 'react';

function AnswerButton({ text, isCorrect, onClick, index }) {
    const [color, setColor] = useState(0);
    
    setColor(isCorrect);

    return <Col className={color === 0 ? 'mx-3 px-3 py-3 answer-neutral' : isCorrect === 1 ? 'mx-3 px-3 py-3 answer-correct ' : 'answer-incorrect'} xl={12} onClick={() => onClick(index)}>{text}</Col>
}

export default AnswerButton;