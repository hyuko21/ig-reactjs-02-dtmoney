type Transaction = {
  id: string
  title: string
  amount: number
  type: string
  category: string
  createdAt: Date
}

type AddTransactionInput = Omit<Transaction, 'id' | 'createdAt'>