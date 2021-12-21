import React from 'react'
import CloseBtn from '../img/cerrar.svg'


const Modal = ({setModal, modalAnimation, setModalAnimation}) => {

    const hideModal = () => {
        
        setModalAnimation(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    return (
        <div className='modal'>
            <div className="cerrar-modal">
                <img 
                    src={CloseBtn}
                    alt="Cerrar Modal"
                    onClick={hideModal} />
            </div>
            <form className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}>
                <legend>Nuevo gasto</legend>
            </form>
        </div>
    )
}

export default Modal
