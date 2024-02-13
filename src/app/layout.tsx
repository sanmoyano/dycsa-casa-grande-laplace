import React from 'react'
import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

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
        <Script async crossOrigin='anonymous' src='https://connect.facebook.net/en_US/sdk.js?hash=ef455e3d3b0168da259e5283b62d9752' />
        <Script id='facebook-jssdk' src='https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v3.0' />
        <Script async data-ads-env='prod' data-ads-portal-id='5734234' data-hsjs-env='prod' data-hsjs-hublet='na1' data-hsjs-portal='5734234' data-loader='hs-scriptloader' id='hs-ads-pixel-5734234' src='https://js.hsadspixel.net/fb.js' type='text/javascript' />
        <Script async id='hs-analytics' src='https://js.hs-analytics.net/analytics/1701642300000/5734234.js' type='text/javascript' />
      </head>
      <body className={`${pangram.variable}`}>
        {children}
        <Script async defer id='hs-script-loader' src='"//js.hs-scripts.com/5734234.js' type='text/javascript' />
        <Script src='//js.hsforms.net/forms/embed/v2.js' type='text/javascript' />
      </body>
      <GoogleTagManager gtmId='GTM-TDN4PZNW' />
    </html>
  )
}
