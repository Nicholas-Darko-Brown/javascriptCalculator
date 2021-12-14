/* eslint-disable no-eval */
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  const operation = (value) => {
    const operators = /[+\-*/]/;
    if (input === "" && value === "0") {
      return;
    }
    if (value === ".") {
      const decimal = input.split(operators);
      if (decimal[decimal.length - 1].includes(".")) {
        return;
      }
    }
    if (value !== "-" && operators.test(value)) {
      const lastChar = input[input.length - 1] || "";
      const lastButOne = input[input.length - 2] || "";
      if (operators.test(lastChar)) {
        if (lastChar === "-" && operators.test(lastButOne)) {
          setInput(input.slice(0, -2) + value);
          return;
        }
        setInput(input.slice(0, -1) + value);
        return;
      }
    }

    setInput(input + value);
  };
  const calculate = () => {
    setInput(eval(input).toString());
  };

  const allClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="display" id="display">
          {input || "0"}
        </div>

        <div onClick={allClear}  id="clear" className='box'>AC</div>
        <div onClick={() => operation('/')}  id="divide" className='box'>/</div>
        <div onClick={() => operation('*')}  id="multiply" className='box'>*</div>
        <div onClick={() => operation('7')}  id="seven" className='box'>7</div>
        <div onClick={() => operation('8')}  id="eight" className='box'>8</div>
        <div onClick={() => operation('9')}  id="nine" className='box'>9</div>
        <div onClick={() => operation('-')}  id="subtract" className='box'>-</div>
        <div onClick={() => operation('4')}  id="four" className='box'>4</div>
        <div onClick={() => operation('5')}  id="five" className='box'>5</div>
        <div onClick={() => operation('6')}  id="six" className='box'>6</div>
        <div onClick={() => operation('+')}  id="add" className='box'>+</div>
        <div onClick={() => operation('1')}  id="one" className='box'>1</div>
        <div onClick={() => operation('2')}  id="two" className='box'>2</div>
        <div onClick={() => operation('3')}  id="three" className='box'>3</div>
        <div onClick={calculate}  id="equals" className='box'>=</div>
        <div onClick={() => operation('0')}  id="zero" className='box'>0</div>
        <div onClick={() => operation('.')}  id="decimal" className='box'>.</div>

      </div>
    </div>
  );
}


export default App;
