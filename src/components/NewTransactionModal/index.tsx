import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import {
  Container,
  TransactionTypeContainer,
  TransactionTypeButton
} from './styles'
import { useState } from 'react'

type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('income')

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
      <Container>
        <h2>New Transaction</h2>
        <input type='text' placeholder='Title' />
        <input type='number' placeholder='Amount' />
        <TransactionTypeContainer>
          <TransactionTypeButton
            type='button'
            onClick={() => setType('income')}
            isActive={type === 'income'}
          >
            <img src={incomeImg} alt='Income' />
            <span>Income</span>
          </TransactionTypeButton>
          <TransactionTypeButton
            type='button'
            onClick={() => setType('outcome')}
            isActive={type === 'outcome'}
          >
            <img src={outcomeImg} alt='Outcome' />
            <span>Outcome</span>
          </TransactionTypeButton>
        </TransactionTypeContainer>
        <input type='text' placeholder='Category' />
        <button type='submit'>Submit</button>
      </Container>
    </Modal>
  )
}
