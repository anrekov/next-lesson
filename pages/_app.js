import '../styles/global.css'

// Обёртка на весь сайт
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
