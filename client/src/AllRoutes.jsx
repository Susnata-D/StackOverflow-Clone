import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestions from './Pages/AskQuestions/AskQuestions'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Auth' element={<Auth />} />
                <Route path='/Questions' element={<Questions />} />
                <Route path='/AskQuestions' element={<AskQuestions />}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes