import React from 'react'

const ControlPresupuesto = ({presupuesto, setPresupuesto}) => {

    const formatCantidad = cantidad => {
        return cantidad.toLocaleString('es-ES', {
            style: 'currency',
            currency: 'EUR'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatCantidad(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatCantidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto
