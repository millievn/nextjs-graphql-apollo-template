import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services'

class MyApp extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Website Title</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
    )
  }
}

export default MyApp
