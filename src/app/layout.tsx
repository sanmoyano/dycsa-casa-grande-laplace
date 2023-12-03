import React from 'react'
import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'

import Header from '@/components/presentational/header'
import Footer from '@/components/presentational/footer'

import type { Metadata } from 'next'

const pangram = localFont({
  src: [
    {
      path: './fonts/PPPangramSans-Light.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/PPPangramSans-Medium.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/PPPangramSans-Bold.otf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-pangram-sans'
})

export const metadata: Metadata = {
  title: 'Dycsa - Casa Grande Laplace',
  description: 'Exclusivo para quienes disfrutan de la buena vida'
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html className='scroll-smooth' lang='en'>
      <head>
        <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/site.webmanifest' rel='manifest' />
        <meta content='on' name='twitter:widgets:csp' />
        <Script crossOrigin='anonymous' src='https://connect.facebook.net/en_US/sdk.js?hash=ef455e3d3b0168da259e5283b62d9752' />
        <Script id='facebook-jssdk' src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v3.0' />
        <Script data-ads-env='prod' data-ads-portal-id='5734234' data-hsjs-env='prod' data-hsjs-hublet='na1' data-hsjs-portal='5734234' data-loader='hs-scriptloader' id='hs-ads-pixel-5734234' src='https://js.hsadspixel.net/fb.js' type='text/javascript' />
        <Script id='hs-analytics' src='https://js.hs-analytics.net/analytics/1701642300000/5734234.js' type='text/javascript' />
        <Script src='https://www.googletagmanager.com/gtm.js?id=GTM-M2SJW7F' />
        <Script id='tag-manager'>
          {`
            window.dataLayer = [{"title":"Casagrande Laplace :: \u00a1Viv\u00ed a lo Grande!","author":"Eduardo Sondon","wordcount":0,"logged_in":"false","page_id":499,"post_date":"2019-03-24 18:52:26"}]
          `}
        </Script>
        <Script id='google-analytics'>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-M2SJW7F')
          `}
        </Script>
      </head>
      <body className={`${pangram.variable}`}>
        <Header />
        {children}
        <Footer />
        <Script async defer id='hs-script-loader' src='"//js.hs-scripts.com/5734234.js' type='text/javascript' />
        <Script src='//js.hsforms.net/forms/embed/v2.js' type='text/javascript' />
      </body>
    </html>
  )
}
