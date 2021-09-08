import React from 'react'
import MarketInfoSkeleton from '../skeleton-components/MarketInfoSkeleton';
//regularMarketOpen, regularMarketDayHigh, regularMarketDayLow, regularMarketVolume, averageDailyVolume10Day, regularMarketPreviousClose, 

const Marketinfo = ({prices}) => {
    const priceData = prices || {};
    if(Object.entries(priceData).length !== 0){
        return (
            <div className = "flex justify-between mt-10 p-10 rounded shadow bg-gray-100 dark:bg-gray-800">
                <div>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">Open</span>{priceData.regularMarketOpen.fmt}</p>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">High</span>{priceData.regularMarketDayHigh.fmt}</p>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">Low</span>{priceData.regularMarketDayLow.fmt}</p>
                </div>
                <div>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">Prev. Close</span>{priceData.regularMarketPreviousClose.fmt}</p>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">Volume</span>{priceData.regularMarketVolume.fmt}</p>
                    <p className = "mb-2 font-bold text-gray-600 text-right dark:text-white"><span className = "font-normal dark:text-gray-300 pr-10">Average Volume</span>{priceData.averageDailyVolume10Day.fmt}</p>
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
