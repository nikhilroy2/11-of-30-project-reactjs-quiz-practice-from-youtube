import React from 'react';

// const Button = ({ answer, className }) => {
//     return (
//         <button className={`rounded shadow w-full bg-white p-4
//         text-purple-800 font-semibold ${className} `}>{answer}</button>

//     )
// }


const Questionaire = ({ handleAnswer,  data: { question, correct_answer, incorrect_answers } }) => {
    //    console.log(data)
    const suffledAnswers = [correct_answer, ...incorrect_answers].sort(()=>  Math.random() - 0.5);

    return (
        <div className="container">

            <div className=
                "bg-white text-purple-800 p-10 rounded \
         shadow-md">
                <h2 className="text-2xl"
                    dangerouslySetInnerHTML={{ __html: question }} />

            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">

                {
                    suffledAnswers.map(answer=> (
                // <Button className={correct_answer=== answer ? 'bg-purple-300' : ''} onClick={() => handleAnswer(answer)} answer={answer}></Button>
                <button 
                className={`bg-white p-4
                  text-purple-800 font-semibold 
                  rounded shadow `}
                   onClick={() => handleAnswer(answer)} 
                   
                   dangerouslySetInnerHTML={{ __html: answer }}
                   />
                
                    ))
                }



            </div>

        </div>
    )
}

// function everydayIMSuffling(arr){
//     for(let i = 0; i < 100; i++){
//         let idx1 = Math.floor(Math.random() * arr.length);
//         let idx2 = Math.floor(Math.random() * arr.length);
//     }

// }
export default Questionaire;