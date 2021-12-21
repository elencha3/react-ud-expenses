import React from 'react'

const NewPresupuesto = ({presupuesto, setPresupuesto}) => {

    const handlePresupuesto = (e) => {
        e.preventDefault();
        console.log(Number(presupuesto))
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario'>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        type="text" 
                        className="nuevo-presupuesto"
                        value={presupuesto}
                        placeholder='Añade tu presupuesto'
                        onChange={(e) => setPresupuesto(e.target.value) }
                    />
                </div>

                <input type="submit" value="Añadir" />
            </form>
        </div>
    )
}

export default NewPresupuesto
