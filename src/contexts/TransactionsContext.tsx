import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type TransactionsContextValue = {
  transactions: Transaction[]
  addTransaction: (transaction: AddTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextValue>(
  {} as TransactionsContextValue
)

type TransactionsProviderProps = {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(({ data }) => setTransactions(data?.transactions || []))
  }, [])

  async function addTransaction(transactionInput: AddTransactionInput) {
    const { data: { transaction } } = await api.post('transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ addTransaction, transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}