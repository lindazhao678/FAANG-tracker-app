import Head from 'next/head'
import { Fragment } from 'react'
import Hero from '../components/layout/Hero'
import FaangList from '../components/faang/FaangList'
import axios from "axios"
import { SERVER_NAME } from '../config'

export default function Home(props) {

  return (
    <Fragment>
      <Head>
        <title>FAANG tracker app | FAANG stocks</title>
        <meta name="description" description="keep on track with FAANG stockes and news." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={'FAANG Stocks'}>
      <div><strong>F</strong>acebook,<strong>A</strong>mazon, <strong>A</strong>pple, <strong>N</strong>etflix, and <strong>G</strong>oogle are the publicly traded stocks of U.S. technology giants.</div>
      <div>
      They are among the best-performing technology and most well-known companies in the world.
      </div>
      </Hero>     
      <FaangList companies={props.faang} />
    </Fragment>
  )
}

// STATIC SITE GENERATION
export const getStaticProps = async () => {
  // Fetch data
  //const response = await axios.get(`${SERVER_NAME}/api/faang`);
  //const data = await response.data

  // Returned data as props
  return {
    props: {
      faang: []
    },
  };
};
