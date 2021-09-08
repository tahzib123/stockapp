import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {

    return (
        <div>
        <nav className="bg-gray-800 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
                <div className="flex items-center">
                <div className="flex-shrink-0">
                    <Link to = "/">
                        <img
                        className="h-8 w-8"
                        src="https://img.icons8.com/color/48/000000/line-chart--v2.png"
                        alt="Workflow"
                        />
                    </Link>
                </div>
                <div className="">
                    <div className="ml-1 flex items-baseline space-x-4">
                        <h1 className = "hover:bg-gray-700 text-white px-3 py-2 rounded-md text-m font-medium">
                            <Link to = "/">Stock Finder</Link>
                        </h1>
                    </div>
                </div>
                </div>
                
            </div>
            </div>

            
        </nav>

        </div>    
    )
}

export default Navigation;
