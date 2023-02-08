import React from 'react';
import RetractorCompare from './Components/RetractorCompare';
import Header from './Components/Header';
import About from './Components/About';
import TentsCompare from './Components/TentsComparison';
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

function App () {


    return (
    <Router>
        <div>
            <Header />
            <Routes>
                <Route path='/About' element={<About />} />
                <Route path='/RetractorCompare'element={ <RetractorCompare />} />
                <Route path='/TentsCompare' element={<TentsCompare />} />
            </Routes>

            
        </div>
    </Router>

    )
}

export default App;

