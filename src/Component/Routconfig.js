import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Rating from './Rating';
import Counter from './Counter';
import Demo22 from './Demo22';
import Task1 from './Task1';
import Task2 from './Task2';
import Firstcomponent from './Firstcomponent';

export default function Routconfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path='/Firstcomponent' element={<Firstcomponent />} />
                    <Route path='/Counter' element={<Counter />} />
                    <Route path='/Rating' element={<Rating/>}/>
                    <Route path='/Demo22'element={<Demo22/>}/>
                    <Route path='/Task1' element={<Task1/>}/>
                    <Route path='/Task2' element={<Task2/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
