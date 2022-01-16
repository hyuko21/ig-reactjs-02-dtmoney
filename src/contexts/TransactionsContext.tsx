import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type ITransactionsContext = {
  transactions: Transaction[]
}

export const TransactionsContext = createContext<ITransactionsContext>({
  transactions: []
})

type TransactionsProviderProps = {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(({ data }) => setTransactions(data?.transactions || []))
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}