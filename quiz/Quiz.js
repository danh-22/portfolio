import {useState} from 'react'
import {football, mma, games} from './Questions.js'

const Quiz = () => {
    const [data, setData] = useState(football)
    const [start, setStart] = useState(true)
    const [qn, setQn] = useState(0)
    const [value, setValue] = useState("")
    const [score, setScore] = useState(0)
    const [error, setError] = useState(false)

    function nextQuestion(){
        if(value === data[qn].correct_answer){
            setScore(score + 1)
        }
        if(value){
            setQn(qn + 1)
            setValue("")
            setError(false)
        } else {
            setError(true)
        }
    }

    function startQuiz(){
        setStart(true)
        setQn(0)
        setScore(0)
        setValue("")
    }

    if(start){
     return(
        <section className="start custom-bg">
             <h1>Categories</h1>
                <div id="start-btn">
                <button className="quiz-btn" onClick={()=> setData(football)} type="button>">Football</button>
                <button className="quiz-btn" onClick={()=> setData(mma)} type="button>">MMA</button>
                <button className="quiz-btn" onClick={()=> setData(games)} type="button>">Video Games</button>
                </div>
                <br/>

                <button className="quiz-btn" onClick={()=> setStart(false)}>Start Quiz</button>
         </section>
     )
    } 
    else if(qn > data.length -1){
        return(
            <div className="start custom-bg">
                <h1>You scored {score}/5</h1>
                <button onClick={startQuiz} className="quiz-btn">Start Again</button>
            </div>
        )
    }
    else if(start === false){
        return(
            <section className="start custom-bg">
                <div id="answers">
                <h2>{data[qn].question}</h2>
                {data[qn].options.map((answers, index)=> {
                    return(
                    <label key={index}> {answers}
                    <br/>
                        <input type="radio" name="answers" value={answers} checked={value === answers} onChange={(e)=> setValue(e.target.value)}></input>
                    </label>
                    )
                })}
                <br/>
                {error && <h3 style={{color: "red"}}>Please select an answer</h3>}
                <button className="quiz-btn" onClick={nextQuestion} type="button">Next Question</button>

                </div>
            </section>
        )
    } 
        


    }
    export default Quiz