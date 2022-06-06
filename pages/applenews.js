import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from "../components/layout/Hero";
import NewsList from '../components/news/NewsList';

function AppleNews(props) {
  return (
    <Fragment>
      <Head>
        <title>FAANG tracker app | Facebook News</title>
        <meta 
          name='description'
          content='Keep on track with lastest news of Apple'
        />
      </Head>
      <Hero title={'Apple News'} description={'Keep on track with the lastest news of Apple'}/>
      <NewsList loadedNews={props.appleNews} />
    </Fragment>
  );
}

// STATIC SITE GENERATION
export const getStaticProps = async () => {
  // External API Request: NewsAPI (All articles about Apple)
  const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&apiKey=${process.env.NEWS_API_KEY}`);
  const data = response.data.articles

  // Returned data as props
  return {
    props: {
      appleNews: data
    },
    revalidate: 86400
  };
};

export default AppleNews;