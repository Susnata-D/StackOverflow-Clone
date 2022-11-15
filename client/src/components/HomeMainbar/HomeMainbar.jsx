import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionsList from './QuestionsList'
import './HomeMainbar.css'

const HomeMainbar = () => {

    var questionsList = [{
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "Susnata",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Susnata",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }, {
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "Susnata",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]

    const user = 1;

    const location = useLocation();
    const navigate = useNavigate();

    const checkAuth = () => {
        if (user === null) {
            alert('login or signup to ask a question')
            navigate('/Auth')
        }
        else
            navigate('/AskQuestions')
    }

    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
            </div>
            <div>
                {
                    questionsList === null ?
                        <h1>Loading...</h1> :
                        <>
                            <p>{questionsList.length} questions</p>
                            <QuestionsList questionsList={questionsList} />
                        </>
                }
            </div>
        </div >
    )
}

export default HomeMainbar