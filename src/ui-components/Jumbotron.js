import React from 'react'

const Jumbotron = () => {
    return (
        <div className = "mt-20 h-full mx-5 sm:mx-0">
            <h1 className = "mb-5 text-gray-800 dark:text-white font-bold text-3xl sm:text-5xl">Welcome to the Stock Visualizer App</h1>
            <p className = "mb-10 text-gray-500 dark:text-gray-300 font-med text-xl sm:text-2xl">Here you can find information such as the weekly stock prices of a company, the current price, and much more. All of which can be visualized using various
                charts and diagrams.
            </p>
        </div>
    )
}

export default Jumbotron
