import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import newExpenseIcon from './img/nuevo-gasto.svg'



function App() {
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValid, setIsValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  
  const handleNewExpense = () => {
    setModal(true)

    setTimeout(()=> {
      setModalAnimation(true)
    },500)

  }

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValid = {isValid}
        setIsValid = {setIsValid}
      />

      {isValid && (
        <div className="nuevo-gasto">
          <img 
            src={newExpenseIcon} 
            alt="Icono nuevo gasto"
            onClick={handleNewExpense} 
            />
        </div>
      )}

      {modal && 
        <Modal 
          setModal = {setModal}
          modalAnimation = {modalAnimation}
          setModalAnimation = {setModalAnimation}
        />}
      
    </div>
    
  )
}

export default App
