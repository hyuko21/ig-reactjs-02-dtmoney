import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton
} from './styles'
import { useTransactions } from '../../hooks/useTransactions'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { addTransaction } = useTransactions()
  const [formValues, setFormValues] = useState({
    title: '',
    amount: 0,
    type: 'income',
    category: ''
  })

  function updateFormValues<
    T extends typeof formValues,
    K extends keyof T
  >(field: K, value: T[K]) {
    setFormValues((prev) => ({ ...prev, [field]: value }))
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await addTransaction(formValues)

    setFormValues({
      title: '',
      amount: 0,
      type: 'income',
      category: ''
    })
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        className='react-modal-close'
        onClick={onRequestClose}
      >
        <img src={closeImg} alt='Close modal' />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>New Transaction</h2>
        <input
          type='text'
          placeholder='Title'
          value={formValues.title}
          onChange={(event) => updateFormValues('title', event.target.value)}
        />
        <input
          type='number'
          placeholder='Amount'
          value={formValues.amount}
          onChange={(event) => updateFormValues('amount', Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <TransactionTypeButton
            type='button'
            onClick={() => updateFormValues('type', 'income')}
            isActive={formValues.type === 'income'}
            activeColor='green'
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>
          </TransactionTypeButton>
          <TransactionTypeButton
            type='button'
            onClick={() => updateFormValues('type', 'outcome')}
            isActive={formValues.type === 'outcome'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Outcome' />
            <span>Outcome</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>
        <input
          type='text'
          placeholder='Category'
          value={formValues.category}
          onChange={(event) => updateFormValues('category', event.target.value)}
        />
        <button type='submit'>Submit</button>
      </Container>
    </Modal>
  )
}
