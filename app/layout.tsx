import './globals.css'
import type { Metadata } from 'next'
import AnalyticsWrapper from '../components/analytics'
import Sidebar from '../components/sidebar'
import localFont from 'next/font/local'

const karla = localFont({
  src: '../public/fonts/Karla-VariableFont_wght.ttf',
  weight: '700',
  variable: '--font-karla',
  display: 'swap',
})

const gloock = localFont({
  src: '../public/fonts/Gloock-Regular.ttf',
  variable: '--font-gloock',
  display: 'swap',
})

const azeret = localFont({
  src: '../public/fonts/AzeretMono-VariableFont_wght.ttf',
  variable: '--font-azeret',
  display: 'swap',
})

// Used for head information on all pages
export const metadata: Metadata = {
  title: {
    default: 'Default Title',
    template: '%s | Default Title',
  },
  description: 'Default Description',
  openGraph: {
    title: 'Default OG Title',
    description: 'Default OG Description',
    url: 'https://defaultogurl.com',
    siteName: 'Default Sitename',
    images: [
      {
        url: 'https://via.placeholder.com/1920/1080',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Default OG Twitter Title',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${karla.variable} ${gloock.variable} ${azeret.variable}`}
    >
      <head />
      <body className='antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <Sidebar />
        <main className='flex-auto min-w-0 flex flex-col'>
          {children}
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  )
}
