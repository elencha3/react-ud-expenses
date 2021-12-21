import React from 'react'
import NewPresupuesto from './NewPresupuesto'


const Header = ({presupuesto, setPresupuesto}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            <NewPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto} />
        </header>
    )
}

export default Header
