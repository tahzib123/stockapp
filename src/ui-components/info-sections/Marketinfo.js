import React from 'react'
import MarketInfoSkeleton from '../skeleton-components/MarketInfoSkeleton';
//regularMarketOpen, regularMarketDayHigh, regularMarketDayLow, regularMarketVolume, averageDailyVolume10Day, regularMarketPreviousClose, 

const Marketinfo = ({prices}) => {
    const priceData = prices || {};
    if(Object.entries(priceData).length !== 0){
        return (
            <div className = "sm:flex sm:justify-between mt-10 p-10 rounded shadow bg-gray-100 dark:bg-gray-800">
                <div className = "flex justify-between">
                    <div>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Open</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">High</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Low</p>
                    </div>
                    <div>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.regularMarketOpen.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.regularMarketDayHigh.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.regularMarketDayLow.fmt}</p>
                    </div>


                </div>
                <div className = "flex justify-between">
                    <div>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Prev. Close</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Volume</p>
                        <p className = "mb-2 pr-10 font-normal text-gray-500 dark:text-gray-300">Average Volume</p>
                    </div>
                    <div>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.regularMarketPreviousClose.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.regularMarketVolume.fmt}</p>
                        <p className = "mb-2 font-bold text-right text-gray-600 dark:text-white">{priceData.averageDailyVolume10Day.fmt}</p>
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

export default Marketinfo
