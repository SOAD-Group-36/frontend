import '../styles/globals.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit'
import 'uikit/dist/js/uikit-core'
import 'uikit/dist/js/uikit-icons'
import { CookiesProvider } from "react-cookie"


function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Component {...pageProps} />
    </CookiesProvider>
  )
}

export default MyApp
