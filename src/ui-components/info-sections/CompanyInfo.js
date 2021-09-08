import React, { useState, useEffect } from 'react'
import CompanyInfoSkeleton from '../skeleton-components/CompanyInfoSkeleton';

const CompanyInfo = ({quoteType, summaryProfile, price, ticker}) => {
    const companyData = quoteType || {};
    const summary = summaryProfile || {};
    const priceData = price || {};
    const [tickerData, setTickerData] = useState({});
    // const url= `https://api.tiingo.com/tiingo/daily/${ticker}/prices?token=9f2bc4e254be4ca864ba83dc65883a749d5685c8`

    // useEffect(() => {
    //     fetch(url, {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type": "application/json",
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => setTickerData(data[0]))
    //     .then(() => console.log(tickerData))
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }, [url, tickerData])


    if(Object.entries(companyData).length !== 0){
        return (
            <div className = "mt-10 py-10">
                <div className = "flex md:flex-row sm: flex-col justify-between">
                    <div>
                        <h1 className = "text-gray-900 dark:text-white font-bold text-3xl">{companyData.longName} ({companyData.symbol}) </h1>
                        <h2 className ="text-gray-700 dark:text-gray-300 font-bold inline">{companyData.exchangeTimezoneName}</h2>
                        { <p className = {`text-xs inline rounded font-light p-0 px-2 ml-1 text-white ${priceData.marketState === "OPEN" ? "bg-green-400" : "bg-red-400"}`}>
                            {priceData.marketState}
                        </p>}
                    </div>
                    <div className = "flex items-center">
                        <p className = "text-gray-900  text-3xl md:text-5xl dark:text-white font-bold ">{parseFloat(priceData.regularMarketPrice.raw).toFixed(2)}</p>
                        <p className = "text.gray-900 text-xl dark:text-gray-300 md:text-3xl">{priceData.currency}</p>
                        { <p className = {`text-xs  rounded font-light  p-1 px-2 ml-1 text-white ${priceData.regularMarketChange.raw > 0 ? "bg-green-400" : "bg-red-400"}`}>
                            {priceData.regularMarketChange.raw > 0 ? "+" : ""}{parseFloat(priceData.regularMarketChange.raw).toFixed(2)}
                            {" (" + priceData.regularMarketChangePercent.fmt + ")"}
                        </p>}

                        
                    </div>
                </div>
                <p className = "text-gray-500 dark:text-gray-400 font-regular">{summary.longBusinessSummary}</p>

            </div> 
        )
    }else{
        return(
            <CompanyInfoSkeleton />
        )
    }
}

export default CompanyInfo
