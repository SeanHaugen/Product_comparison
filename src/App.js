import React, { useState } from 'react';
import RetractorCompare from './Components/RetractorCompare';
import Header from './Components/Header';
import About from './Components/About';
import TentsCompare from './Components/TentsComparison';
import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import SearchBar from './Components/SearchBar';


function App () {

    const [ filteredProducts, setFilteredProducts ] = useState([])

    const handleSubmit = (input1, input2) => {
        console.log('do a search with ', input1, 'and', input2)
        setFilteredProducts(
            
        )
    }


    return (
        <div>
            <Router>
                <Header />
                <SearchBar onSubmit={handleSubmit} />
                <Routes>
                    <Route path='/About' element={<About />} />
                    <Route path='/RetractorCompare'element={ <RetractorCompare />} />
                    <Route path='/TentsCompare' element={<TentsCompare />} />
                </Routes>
            </Router>
        </div>


    )
}

export default App;

