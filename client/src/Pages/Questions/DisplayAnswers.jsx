import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar/Avatar'
// eslint-disable-next-line
import QuestionDetails from './QuestionDetails'
import './Questions.css'

const DisplayAnswers = ({ question }) => {
    return (
        <div>
            {
                question.answer.map(ans => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                                <p>answered {ans.answeredOn}</p>
                                <Link to={`/User/${question.userId}`} className='user-link' style={{ color: '#0086d8' }}>
                                    <Avatar backgroundColor="lightgreen" px='11px' py='5px' borderRadius='4px' value={ans.userAnswered.charAt(0).toUpperCase()} />
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswers