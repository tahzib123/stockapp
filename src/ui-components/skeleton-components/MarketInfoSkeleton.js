import React from 'react'

const MarketInfoSkeleton = () => {
    return (
        <div className="p-10 mt-10 border rounded shadow max-w-7xl w-full mx-auto bg-gray-100 dark:bg-gray-800">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 justify-between space-y-4 py-1">
                    <div className="space-y-2">
                        <div className = "h-4 bg-gray-400 "></div>
                        <div className = "h-4 bg-gray-400 "></div>
                        <div className = "h-4 bg-gray-400 "></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MarketInfoSkeleton
