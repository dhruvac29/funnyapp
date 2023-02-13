import React, { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operator, setOperator] = useState('addition');
    const [result, setResult] = useState(0);

    const handleNum1Change = (event) => {
        setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
        setNum2(event.target.value);
    };

    const handleOperatorChange = (event) => {
        setOperator(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://calculatorapi.vercel.app/${operator}/${num1}/${num2}`);
        const data = await response.json();
        setResult(data.result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={num1} onChange={handleNum1Change} />
            <select value={operator} onChange={handleOperatorChange}>
                <option value="addition">+</option>
                <option value="subtraction">-</option>
                <option value="multiplication">*</option>
            </select>
            <input type="number" value={num2} onChange={handleNum2Change} />
            <button type="submit">Calculate</button>
            <p>Result: {result}</p>
        </form>
    );
};

export default Calculator;
