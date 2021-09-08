import React, {useState, useEffect} from 'react'
import Searchbar from '../ui-components/Searchbar';
import Jumbotron from '../ui-components/Jumbotron';
import Layout from '../layouts/Layout';
import Articles from '../ui-components/info-sections/Articles';

const url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-newsfeed';


const Home = () => {
    const [newsArticles, setnewsArticles] = useState([]);

    useEffect(() => {
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "db152bed3cmsh466eb1b44c82ed3p1bd159jsn0fc9c362e86c",
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data => setnewsArticles(data.items.result))
        .catch(err => {
            console.error(err);
        });        
    }, [])
    return (
            <Layout>
                <Jumbotron />
                <Searchbar />
                <div className = "mt-80 h-full mx-5 sm:mx-0">
                    <h1 className = "text-gray-800 dark:text-white font-bold text-xl inline border-b-2 border-gray-800">Stories </h1>
                </div>
                <Articles articleList = {newsArticles} />
            </Layout>
    )
}

export default Home
