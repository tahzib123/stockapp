import React from 'react'

const CompanyInfoSkeleton = () => {
    return (
        <div className="py-10 mt-10 max-w-7xl w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-600 rounded w-1/6"></div>
                    <div className="h-4 bg-gray-500 rounded w-1/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CompanyInfoSkeleton
