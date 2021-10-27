import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
const Searchbar = () => {

    const history = useHistory();
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue('');
        history.push(`/stockapp/${searchValue}`)
    }

    return (
        <form onSubmit = {handleSubmit}>
                <div className="bg-gray-100 dark:bg-gray-800 shadow flex rounded">
                    <input onChange = {handleChange} className="w-full bg-gray-100 rounded p-4 dark:bg-gray-800 dark:text-gray-100" type="text" placeholder="Search..." />
                    <button type = "submit" className="w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </form>
    )
}

export default Searchbar;
