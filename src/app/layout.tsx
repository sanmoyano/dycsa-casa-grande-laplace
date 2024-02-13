import React from 'react'
import './globals.css'
import localFont from 'next/font/local'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'

import Header from '@/components/presentational/header'

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
      </head>
      <body className={`${pangram.variable}`}>
        <Header />
        {children}
        <Script async defer id='hs-script-loader' src='"//js.hs-scripts.com/5734234.js' type='text/javascript' />
        <Script src='//js.hsforms.net/forms/embed/v2.js' type='text/javascript' />
      </body>
      <GoogleTagManager gtmId='GTM-TDN4PZNW' />
    </html>
  )
}
