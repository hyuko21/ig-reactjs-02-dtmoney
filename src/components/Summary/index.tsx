import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency } from '../../helpers/format'

import { Container } from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.incomes += transaction.amount
      acc.total += transaction.amount
    }
    if (transaction.type === 'outcome') {
      acc.outcomes -= transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, { incomes: 0, outcomes: 0, total: 0 })

  return (
    <Container>
      <div>
        <header>
          <p>Incomes</p>
          <img src={incomeImg} alt="Incomes" />
        </header>
        <strong>{formatCurrency(summary.incomes)}</strong>
      </div>
      <div>
        <header>
          <p>Outcomes</p>
          <img src={outcomeImg} alt="Outcomes" />
        </header>
        <strong>{formatCurrency(summary.outcomes)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}