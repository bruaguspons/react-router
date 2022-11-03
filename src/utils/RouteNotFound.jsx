import React from 'react'
import { Route, Routes } from 'react-router-dom'

function RouteNotFound({ children }) {
    return (
        <Routes>
            {children}
            <Route path='*' element={<>Not Found</>}></Route>

        </Routes>
    )
}

export default RouteNotFound