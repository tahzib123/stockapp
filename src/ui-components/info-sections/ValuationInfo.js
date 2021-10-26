import React from 'react'
import MarketInfoSkeleton from '../skeleton-components/MarketInfoSkeleton';
const ValuationInfo = ({summaryDetail}) => {

    const summaryData = summaryDetail || {};
    if(Object.entries(summaryData).length !== 0){
        return (
            <div className = "sm:flex sm:justify-between mt-10 p-10 rounded shadow bg-gray-100 dark:bg-gray-800">
                <div className = "flex justify-between">
                    <div>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Market Cap</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Trailing P/E</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Forward P/E</p>
                    </div>
                    <div>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.marketCap.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.trailingPE.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.forwardPE.fmt}</p>
                    </div>


                </div>
                <div className = "flex justify-between">
                    <div>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Price To Sales (TTM)</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Beta (5Y Monthly</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Dividend</p>
                    </div>
                    <div>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.priceToSalesTrailing12Months.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.beta.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{summaryData.dividendYield.fmt || "N/A"}</p>
                    </div>    
                </div>
            </div>
            
        )
    }else{
        return (
            <MarketInfoSkeleton />
        )
    }
    
}

export default ValuationInfo
