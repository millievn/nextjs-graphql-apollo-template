import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: { ENDPOINT },
} = getConfig()

const initialLink = createHttpLink({ uri: ENDPOINT, fetch, credentials: 'same-origin' })

const tokenLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: typeof window === 'undefined' ? undefined : localStorage.getItem('Authorization'),
    },
  })
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      // eslint-disable-next-line no-console
      console.error(message)
      if (message.includes('先登录')) {
        return false
      }
      return false
    })
  }

  forward(operation)
})

const cache = new InMemoryCache()

// https://github.com/apollographql/apollo-cache-persist#how-do-i-wait-for-the-cache-to-be-restored-before-rendering-my-app

export default new ApolloClient({
  cache,
  link: ApolloLink.from([errorLink, tokenLink, initialLink]),
})
