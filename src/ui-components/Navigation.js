import React from 'react'
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {

    return (

        <nav className="bg-white   dark:bg-gray-900">
            <div>
                <div className="flex mx-5 md:max-w-7xl md:mx-auto justify-between py-2">
                    <div className="flex">
                        <Link to = "/stockapp">
                            <img
                            className="h-8 w-8"
                            src="https://img.icons8.com/color/48/000000/line-chart--v2.png"
                            alt="Workflow"
                            />
                        </Link>
                        <h1 className = "text-gray-500 dark:hover:bg-gray-700 dark:text-white px-3 py-2 rounded-md text-m font-medium">
                                <Link to = "/stockapp">Stock Finder</Link>
                        </h1>
                    </div>
                    <div className="flex">
                        <ThemeToggle />
                    </div>
                    
                    
                </div>
            </div>

            
        </nav>
   
    )
}

export default Navigation;
