import { useContext } from 'react'
import { Container } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function TransactionList() {
  const { transactions } = useContext(TransactionsContext)

  function renderTransaction(transaction: Transaction) {
    return (
      <tr key={transaction.id}>
        <td>{transaction.title}</td>
        <td className={transaction.type}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(transaction.amount)}
        </td>
        <td>{transaction.category}</td>
        <td>
          {new Intl.DateTimeFormat('pt-BR')
            .format(new Date(transaction.createdAt))}
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