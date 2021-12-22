import { useState, useEffect } from "react";
import { formatCurrency } from "../helpers";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, setPresupuesto, expenses }) => {
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce(
            (total, expense) => expense.amount + total,
            0
        );
        const totalAvailable = presupuesto - totalSpent;

        //Calcular porcentaje gastado
        const newPercentage = (
            ((presupuesto - totalAvailable) / presupuesto) *
            100
        ).toFixed(2);
        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1000);

        setAvailable(totalAvailable);
        setSpent(totalSpent);
    }, [expenses]);

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: "#3b82f6",
                        trailColor: "#f5f5f5",
                        textColor: "#3b82f6"
                    })}
                    value={percentage}
                    text={`${percentage}%`}
                />
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
