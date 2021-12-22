import {useState} from "react";
import Mensaje from "./Mensaje";
import CloseBtn from "../img/cerrar.svg";


const Modal = ({ setModal, modalAnimation, setModalAnimation, saveExpense }) => {
    
    //State para mensaje
    const [message, setMessage] = useState('')

    //States para el form
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    
    const hideModal = () => {
        setModalAnimation(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if ([name, amount, category].includes('')) {
            setMessage('Todos los campos son obligatorios')
            setTimeout(() => {
                setMessage('')
            }, 3000)
            return
        }

        saveExpense({name, amount, category})

    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CloseBtn} alt="Cerrar Modal" onClick={hideModal} />
            </div>
            <form
                className={`formulario ${modalAnimation ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>Nuevo gasto</legend>
                {message && <Mensaje tipo="error">{message}</Mensaje>}
                <div className="campo">
                    <label htmlFor="name">Nombre Gasto</label>
                    <input 
                    id="name"
                    type="text"
                    placeholder="Gasto"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="amount">Cantidad</label>
                    <input 
                    id="amount"
                    type="number"
                    placeholder="Cantidad"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select 
                    id="categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                type="submit"
                value="Añadir gasto" />
            </form>
        </div>
    );
};

export default Modal;
