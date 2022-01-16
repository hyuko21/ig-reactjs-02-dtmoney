import { useContext } from 'react'
import { Container } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { formatCurrency, formatDate } from '../../helpers/format'

export function TransactionList() {
  const { transactions } = useContext(TransactionsContext)

  function renderTransaction(transaction: Transaction) {
    return (
      <tr key={transaction.id}>
        <td>{transaction.title}</td>
        <td className={transaction.type}>
          {formatCurrency(transaction.amount)}
        </td>
        <td>{transaction.category}</td>
        <td>
          {formatDate(transaction.createdAt)}
        </td>
      </tr>
    )
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(renderTransaction)}
        </tbody>
      </table>
    </Container>
  )
}