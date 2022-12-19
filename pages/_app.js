import LayoutContainer from '../components/layout/Layout'
import Loader from '../components/loader/Loader'
import AppContextProvider from '../store/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AppContextProvider>
    <Loader>
      <LayoutContainer {...pageProps}>
        <Component {...pageProps} />
      </LayoutContainer>
    </Loader>
  </AppContextProvider>
}

export default MyApp
