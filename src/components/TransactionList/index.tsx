import { Container } from './styles'

export function TransactionList() {
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
          <tr>
            <td>Website development</td>
            <td className="income">R$12.000</td>
            <td>Development</td>
            <td>2021-10-19</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="outcome">- R$1.500</td>
            <td>Home</td>
            <td>2021-10-02</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}