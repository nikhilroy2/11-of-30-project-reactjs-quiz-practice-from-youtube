// https://www.youtube.com/watch?v=HWk-3DkcxKM&t=4940s
// learner === Nikhil Chandra Roy
import React, { useState, useEffect } from 'react';
import Questionaire from './Questionaire';

function ReactQuiz() {
    const API_URL = 'https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple';
    document.title = 'Quiz React App';
    document.body.setAttribute('class', 'bg-purple-500 text-white flex justify-center \
    items-center h-screen');

    document.head.innerHTML +=
        '<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">';

    // api .. 

    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setQuestions(data.results);
               // setCurrentQuestion(data.results[0]);
            })

    }, [])

    const handleAnswer = (answer)=> {
        // bla  bla
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex)

        if(answer === questions[currentIndex].correct_answer){
            // increase the score 
            setScore(score + 1);

        }
        if(newIndex >= questions.length) {
            setGameEnded(true)
        }
    }

    return (
        gameEnded ? (
            <h1 className="text-3xl text-white font-bold">
                Your score was { score} out of {questions.length}
            </h1>
        ) : 
        questions.length > 0 ?
            (
               <div className="container">
                       <Questionaire 
                       handleAnswer={handleAnswer}
                        data={questions[currentIndex]}/>

               </div>

            )

            :
            <h2 className="text-2xl text-white font-bold">
                Loading...
            </h2>
    )
}

export default ReactQuiz;