import LayoutContainer from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <LayoutContainer>
    <Component {...pageProps} />
  </LayoutContainer>
}

export default MyApp
