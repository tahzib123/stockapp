import React from 'react'

const Article = ({title, summary, author, image, link}) => {
    return (
        <div className = "sm:flex mt-10 p-2 sm:p-10 rounded shadow bg-gray-100 dark:bg-gray-800">
            <div className="self-center sm:w-1/4 sm:max-w-1/2">
                {
                    image === null ? 
                    <img src = "public/logo192.png" alt = "article" /> :
                    <img 
                    src = {image.original_url} 
                    alt = "article" 
                    
                    />
                }
            </div>
            <div className = "sm:pl-10 sm:w-3/4">
                <a href = {link}><h1 className = "mb-10 text-indigo-800 dark:text-white font-bold text-lg sm:text-lg inline">{title}</h1></a>
                <p className = "text-gray-500 dark:text-gray-300 font-med">by {author}</p>
                <br/>
                <p className = "dark:text-gray-300 font-med">{summary}</p>
            </div>
        </div>
    )
}

export default Article
