import React from "react";
import NewPresupuesto from "./NewPresupuesto";

const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValid ? (
                <p>Control de Presupuesto</p>
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
