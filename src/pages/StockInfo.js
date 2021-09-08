import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import CompanyInfo from '../ui-components/info-sections/CompanyInfo';
import Marketinfo from '../ui-components/info-sections/Marketinfo';
import Searchbar from '../ui-components/Searchbar';
import LineChartv2 from '../ui-components/chart-components/LineChartv2';
import Layout from '../layouts/Layout';

const StockInfo = () => {
    let { ticker } = useParams();
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${ticker}&region=US`
    const [stockData, setStockData] = useState({})

    useEffect(() => {

        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => setStockData(data))
        .catch(err => {
            console.error(err);
        });
        

    }, [url])



    return (
        <Layout>
            <div className = "mt-10 px-2 sm:px-0">
                <Searchbar />
                <CompanyInfo quoteType = {stockData.quoteType}  summaryProfile = {stockData.summaryProfile} ticker = {ticker} price = {stockData.price} />
                <Marketinfo prices = {stockData.price} />
                <LineChartv2 />
            </div>
        </Layout>
    )
}

export default StockInfo
