import { useState } from "react";

function SearchBar({onSubmit}) {

    const [searchInput1, setSearchInput1] = useState('')
    const [searchInput2, setSearchInput2] = useState('')
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchInput1, searchInput2)
        console.log(`searching for ${searchInput1} and ${searchInput2}`)
    }

    const handleInput1Change = (event) => {
        setSearchInput1(event.target.value)
    }

    const handleInput2Change = (event) => {
        setSearchInput2(event.target.value)
    }


    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <div>
                <input 
                label='Enter search term'
                type='text'
                onChange={handleInput1Change}
                />
                </div>
                <div>
                <input 
                label='Enter search term'
                type='text'
                onChange={handleInput2Change}
                />
                </div>
            <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SearchBar;