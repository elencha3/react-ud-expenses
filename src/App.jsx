import { useState } from 'react'
import Header from './components/Header'



function App() {
  
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValid, setIsValid] = useState(false)

  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValid = {isValid}
        setIsValid = {setIsValid}
      />
    </div>
  )
}

export default App
