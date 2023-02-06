import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './Context'

import App from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-liox.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </BrowserRouter>, document.getElementById('app'))
