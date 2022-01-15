import Modal from 'react-modal'
import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModelOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModelOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        ariaHideApp={false}
        isOpen={isNewTransactionModelOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
