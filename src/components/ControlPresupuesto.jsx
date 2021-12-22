import { useState, useEffect } from "react";
import { formatCurrency } from "../helpers";

const ControlPresupuesto = ({ presupuesto, setPresupuesto, expenses }) => {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, expense) => expense.amount + total, 0
        );

        const totalAvailable = presupuesto - totalSpent;
        
        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [expenses]);

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatCurrency(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatCurrency(available)}
                </p>
                <p>
                    <span>Gastado: </span> {formatCurrency(spent)}
                </p>
            </div>
        </div>
    );
};

export default ControlPresupuesto;
