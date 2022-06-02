import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from "../components/layout/Hero";
import NewsList from '../components/news/NewsList';

function AmazonNews(props) {
  return (
    <Fragment>
      <Head>
        <title>FAANG tracker app | Facebook News</title>
        <meta 
          name='description'
          description='Keep on track with lastest news of Amazon'
        />
      </Head>
      <Hero title={'Amazon News'} description={'Keep on track with the lastest news of Amazon'}/>
      <NewsList loadedNews={props.amazonNews} />
    </Fragment>
  );
}

// STATIC SITE GENERATION
export const getStaticProps = async () => {
  // External API Request: NewsAPI (All articles about Amazon)
  const response = await axios.get(`https://newsapi.org/v2/everything?q=amazon&apiKey=${process.env.NEWS_API_KEY}`);
  const data = response.data.articles

// Returned data as props
  return {
    props: {
      amazonNews: data
    },
    revalidate: 86400
  };
};

export default AmazonNews;