import '../styles/globals.css'
import "aos/dist/aos.css";

const App = ({ Component, pageProps }) => {
  const layout = Component.getLayout || ((content) => content)

  return layout(<Component {...pageProps} />)
}

export default App
