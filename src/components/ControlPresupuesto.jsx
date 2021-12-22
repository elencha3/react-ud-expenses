import React from 'react'
import { formatCurrency } from '../helpers'

const ControlPresupuesto = ({presupuesto, setPresupuesto}) => {

    

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatCurrency(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatCurrency(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatCurrency(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
