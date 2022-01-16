import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelancer',
          amount: 6000,
          type: 'income',
          category: 'Dev',
          createdAt: new Date('2022-01-01T09:00:00')
        },
        {
          id: 2,
          title: 'Compras de mercado',
          amount: 250,
          type: 'outcome',
          category: 'Casa',
          createdAt: new Date('2022-01-02T15:00:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 900,
          type: 'outcome',
          category: 'Casa',
          createdAt: new Date('2022-01-01T12:00:00')
        }
      ]
    })
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
