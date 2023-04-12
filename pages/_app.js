import Head from 'next/head'
import LayoutContainer from '../components/layout/Layout'
import Loader from '../components/loader/Loader'
import AppContextProvider from '../context/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const {
    meta_title = "",
    meta_description = "Dev Web Tool is an application for front-end developer use to generate highly customizable CSS properties and HTML elements.",
    meta_keyword = "dev-web-tool",
    meta_image = "",
    meta_url = "",
  } = pageProps;

  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no shrink-to-fit=no" />
      <title>{meta_title ? `${meta_title} | Dev Web Tool` : 'Dev Web Tool'}</title>
      <meta name="description" content={meta_description} />
      <meta name="keywords" content={meta_keyword} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:description" content={meta_description} />
      {/* <meta property="og:image" content={Config.imagePath + meta_image} /> */}
      {/* <meta property="og:url" content={meta_url} /> */}
    </Head>
    <AppContextProvider>
      <Loader>
        <LayoutContainer {...pageProps}>
          <Component {...pageProps} />
        </LayoutContainer>
      </Loader>
    </AppContextProvider>
  </>
}

export default MyApp
