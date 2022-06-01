import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from "../components/layout/Hero";
import NewsList from '../components/news/newsList';

function NetflixNews(props) {
  return (
    <Fragment>
      <Head>
        <title>FAANG tracker app | Facebook News</title>
        <meta 
          name='description'
          description='Keep on track with lastest news of Netflix'
        />
      </Head>
      <Hero title={'Netflix News'} description={'Keep on track with the lastest news of Netflix'}/>
      <NewsList loadedNews={props.netflixNews} />
    </Fragment>
  );
}

// SERVER SIDE GENERATION
export const getServerSideProps = async () => {
  // External API Request: NewsAPI (All articles about Netflix)
  const response = await axios.get(`https://newsapi.org/v2/everything?q=netflix&apiKey=${process.env.NEWS_API_KEY}`);
  const data = response.data.articles

  // Returned data as props
  return {
    props: {
      netflixNews: data
    },
  };
};

export default NetflixNews;