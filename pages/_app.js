import LayoutContainer from '../components/layout/Layout'
import Loader from '../components/loader/Loader'
import AppContextProvider, { AppContext } from '../store/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <AppContextProvider>
    <LayoutContainer>
      <Loader>
        <Component {...pageProps} />
      </Loader>
    </LayoutContainer>
  </AppContextProvider>
}

export default MyApp
