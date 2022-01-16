import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },
  routes() {
    this.namespace = 'api'

    this.get('transactions', (schema) => {
      return schema.all('transaction')
    })

    this.post('transactions', async (schema, request) => {
      const data = JSON.parse(request.requestBody)
      schema.create('transaction', data)
      return data
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
