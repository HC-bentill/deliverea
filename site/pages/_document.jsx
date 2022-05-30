import process from 'node:process'
import Document, { Head, Html, Main, NextScript } from 'next/document.js'
import { NextStrictCSP } from 'next-strict-csp'

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head

class Site extends Document {
  render() {
    return (
      <Html>
        <HeadCSP>
          <meta httpEquiv="Content-Security-Policy" />
          <meta charSet="UTF-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo:wght@500;600&family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </HeadCSP>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Site
