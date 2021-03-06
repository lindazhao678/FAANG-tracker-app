import { Fragment } from 'react';
import Head from 'next/head';
import axios from "axios";
import Hero from "../components/layout/Hero";
import NewsList from '../components/news/NewsList';

function GoogleNews(props) {
  return (
    <Fragment>
      <Head>
        <title>FAANG tracker app | Google News</title>
        <meta 
          name='description'
          content='Keep on track with lastest news of Google'
        />
      </Head>
      <Hero title={'Google News'} description={'Keep on track with the lastest news of Google'}/>
      <NewsList loadedNews={props.googleNews} />
    </Fragment>
  );
}

// STATIC SITE GENERATION
export const getStaticProps = async () => {
  // External API Request: NewsAPI (All articles about Google)
  const response = await axios.get(`https://newsapi.org/v2/everything?q=google&apiKey=${process.env.NEWS_API_KEY}`);
  const data = response.data.articles

  // Returned data as props
  return {
    props: {
      googleNews: data
    },
    revalidate: 86400
  };
};

export default GoogleNews;