import Head from 'next/head'
import { SessionProvider as Session } from 'next-auth/react'

import type { AppProps } from 'next/app'

import Notifications from '@/components/Notifications/Notifications'
import Auth from '@/components/Login/Auth'
import Layout from '@/components/Layout/Layout'

import '@/styles/globals.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Session session={session}>
        <Auth>
          <Layout>
            <Notifications />
            <Component {...pageProps} />
          </Layout>
        </Auth>
      </Session>
    </>
  )
}