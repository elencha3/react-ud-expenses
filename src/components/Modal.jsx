import {useEffect, useState} from "react";
import Mensaje from "./Mensaje";
import CloseBtn from "../img/cerrar.svg";


const Modal = ({ setModal, modalAnimation, setModalAnimation, saveExpense, editExpense, setEditExpense }) => {
    
    //State para mensaje
    const [message, setMessage] = useState('')

    //States para el form
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    //Para cuando el componente esté listo - para la edición
    useEffect(() => {
        if (Object.keys(editExpense).length > 0 ){
            setName(editExpense.name)
            setAmount(editExpense.amount)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    }, [])
    
    const hideModal = () => {
        setModalAnimation(false);
        setEditExpense({})
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

        saveExpense({name, amount, category, id, date})

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
                <legend>{editExpense.name ? "Editar gasto" : "Nuevo Gasto"}</legend>
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
                value={editExpense.name ? 'Guardar cambios' : 'Añadir Gasto'} />
            </form>
        </div>
    );
};

export default Modal;
