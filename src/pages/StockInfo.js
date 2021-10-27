import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import CompanyInfo from '../ui-components/info-sections/CompanyInfo';
import Marketinfo from '../ui-components/info-sections/Marketinfo';
import ValuationInfo from '../ui-components/info-sections/ValuationInfo';
import Searchbar from '../ui-components/Searchbar';
import LineChartv2 from '../ui-components/chart-components/LineChartv2';
import Layout from '../layouts/Layout';

const StockInfo = () => {
    let { ticker } = useParams();
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${ticker}&region=US`;
    const url2 = `https://yh-finance.p.rapidapi.com/stock/v3/get-historical-data?symbol=${ticker}&region=US`;
    const [combinedInfo, setCombinedInfo] = useState({stockData: {}, lineChartData: []})
    useEffect(() => {

        Promise.all([
            fetch(url, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
                }
            }).then(response => response.json()),
            fetch(url2, {
                "method": "GET",
                "headers": {
                    'x-rapidapi-key': 'db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c',
                    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
                }
            }).then(response => response.json())
        ]).then(([data1, data2]) => {
            console.log(data2.prices);
            setCombinedInfo({stockData: data1, lineChartData: data2.prices});
        })
        // fetch(url, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-key": "db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c",
        //         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        //     }
        // })
        // .then(response => response.json())
        // .then(data => setStockData(data))
        // .catch(err => console.error(err));

        // fetch(url2, {
        //     "method": "GET",
        //     "headers": {
        //         'x-rapidapi-key': 'db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c',
        //         'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
        //     },
        // })
        // .then(response => response.json())
        // .then(data => setLineChartData(data.prices))
        // .catch(err => console.log(err));
        

    }, [url, url2])



    return (
        <Layout>
            <div className = "mt-10">
                <Searchbar />
                <CompanyInfo quoteType = {combinedInfo.stockData.quoteType}  summaryProfile = {combinedInfo.stockData.summaryProfile} ticker = {ticker} price = {combinedInfo.stockData.price} />
                <Marketinfo prices = {combinedInfo.stockData.price} />
                <ValuationInfo summaryDetail = {combinedInfo.stockData.summaryDetail} />
                <LineChartv2 dataPoints = {formatDates(combinedInfo.lineChartData)} />
            </div>
        </Layout>
    )
}




const formatDates = (data) => {
    const formattedDates = data.map((point) => {
      const unixStamp = parseInt(point.date, 10);
      const obj = Object.assign({}, point);
      obj.date = new Date(unixStamp * 1000).toLocaleDateString('en-US');
      return obj;
    })
    console.log(formattedDates);
    return formattedDates;
}



export default StockInfo
