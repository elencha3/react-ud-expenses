import React from "react";
import ControlPresupuesto from "./ControlPresupuesto";
import NewPresupuesto from "./NewPresupuesto";


const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid, expenses, setExpenses }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValid ? (
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    expenses = {expenses}
                    setExpenses={setExpenses}
                    setIsValid={setIsValid}
                />
            ) : (
                <NewPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValid={setIsValid}
                />
            )}




        </header>
    );
};

export default Header;
