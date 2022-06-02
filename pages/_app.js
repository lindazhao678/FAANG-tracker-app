import '../styles/sass/globals.scss'
import Layout from '../components/layout/Layout'
import Script from 'next/script'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy='afterInteractive'
      />

      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
      >
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
        
      gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
    `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </Fragment>
  )
}

export default MyApp
