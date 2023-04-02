import React, { useState, useEffect } from 'react';

function App() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5140/api/questions', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => setQuestions(data));
    }, []);

    const renderQuestion = (question) => {
        switch (question.type) {
            case 'text':
                return (
                    <div key={question.id}>
                        <label htmlFor={question.id}>{question.title}</label>
                        <input type="text" id={question.id} name={question.id} />
                    </div>
                );
            case 'dropdown':
                return (
                    <div key={question.id}>
                        <label htmlFor={question.id}>{question.title}</label>
                        <select id={question.id} name={question.id}>
                            {question.options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                );
            case 'radio':
                return (
                    <div key={question.id}>
                        <fieldset>
                            <legend>{question.text}</legend>
                            {question.options.map(option => (
                                <div key={option.value}>
                                    <input type="radio" id={option.value} name={question.id} value={option.value} />
                                    <label htmlFor={option.value}>{option.label}</label>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {questions.map(question => renderQuestion(question))}
        </div>
    );
}

export default App;
