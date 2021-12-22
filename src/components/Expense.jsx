import React from "react";
import {
    LeadingActions,
    SwipeableListItem,
    SwipeableList,
    SwipeAction,
    TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate, formatCurrency } from "../helpers";

import savingIcon from "../img/icono_ahorro.svg";
import homeIcon from "../img/icono_casa.svg";
import foodIcon from "../img/icono_comida.svg";
import expensesIcon from "../img/icono_gastos.svg";
import leisureIcon from "../img/icono_ocio.svg";
import healthIcon from "../img/icono_salud.svg";
import subscriptionsIcon from "../img/icono_suscripciones.svg";

const iconsDictionary = {
    ahorro: savingIcon,
    comida: foodIcon,
    casa: homeIcon,
    gastos: expensesIcon,
    ocio: leisureIcon,
    salud: healthIcon,
    suscripciones: subscriptionsIcon,
};

const Expense = ({ expense, setEditExpense }) => {
    const { name, amount, category, id, date } = expense;

    const leadingActions = () => (

        <LeadingActions>
            <SwipeAction
                onClick={() => {
                    setEditExpense(expense)
                }}
            >
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => {
                    console.log("editando");
                }}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img
                            src={iconsDictionary[category]}
                            alt="Iconos categorías"
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">
                                Fecha: <span>{formatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">{formatCurrency(amount)}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
};

export default Expense;
