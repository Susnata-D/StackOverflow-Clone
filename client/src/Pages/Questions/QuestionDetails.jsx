import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers'
import upVote from '../../assets/sort-up.svg'
import downVote from '../../assets/sort-down.svg'
import './Questions.css'


const QuestionDetails = () => {

    const { id } = useParams();

    var questionsList = [{
        _id: '1',
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
        _id: '2',
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
        _id: '3',
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
    return (
        <div className='question-details-page'>
            {
                questionsList === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionsList.filter(question => id === question._id).map(question => (
                                <div key={question._id}>
                                    <section className="question-details-container">
                                        <h1>{question.questionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upVote} alt="upVote" width='18' />
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <img src={downVote} alt="downVote" width='18' />
                                            </div>
                                            <div style={{ width: '100%' }}>
                                                <p className="question-body">{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map(tags => (
                                                            <p key={tags}>{tags}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button'>Share</button>
                                                        <button type='button'>Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                                            <Avatar backgroundColor="orange" px='11px' py='5px' borderRadius="4px" value={question.userPosted.charAt(0).toUpperCase()} />
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswers key={question._id} question={question} />

                                            </section>
                                        )
                                    }
                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        <form>
                                            <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                            <input type="submit" className='post-ans-btn' value='post your answer' />
                                        </form>
                                    </section>
                                    <p>
                                        Browse other Question Tagged
                                        {
                                            question.questionTags.map(tag => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        }or
                                        <Link to='/AskQuestion' style={{ textDecoration: "none", color: "#009dff" }}> ask your own question.</Link>
                                    </p>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionDetails