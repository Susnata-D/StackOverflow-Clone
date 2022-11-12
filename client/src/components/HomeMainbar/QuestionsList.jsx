import React from 'react'
import Question from './Question'
import './HomeMainbar.css'

const QuestionsList = ({ questionsList }) => {
    return (
        <>
            {
                questionsList.map((question) => (
                    <Question key={question.id} question={question} />
                ))
            }
        </>
    )
}

export default QuestionsList