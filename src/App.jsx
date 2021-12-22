import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import { createId } from "./helpers";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValid, setIsValid] = useState(false);

    const [modal, setModal] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);

    const [expenses, setExpenses] = useState([]);

    const [editExpense, setEditExpense] = useState({});

    const handleNewExpense = () => {
        setModal(true);
        setEditExpense({});

        setTimeout(() => {
            setModalAnimation(true);
        }, 500);
    };

    const saveExpense = (expense) => {
        if (expense.id) {
            //Actualizar
            const expensesUpdated = expenses.map((expenseState) =>
                expenseState.id === expense.id ? expense : expenseState
            );
            setExpenses(expensesUpdated);
        } else {
            //Añadir
            expense.id = createId();
            expense.date = Date.now();
            setExpenses([...expenses, expense]);
        }

        setModalAnimation(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setModal(true);

            setTimeout(() => {
                setModalAnimation(true);
            }, 500);
        }
    }, [editExpense]);

    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                expenses={expenses}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValid={isValid}
                setIsValid={setIsValid}
            />

            {isValid && (
                <>
                    <main>
                        <ExpensesList
                            expenses={expenses}
                            editExpense={editExpense}
                            setEditExpense={setEditExpense}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={newExpenseIcon}
                            alt="Icono nuevo gasto"
                            onClick={handleNewExpense}
                        />
                    </div>
                </>
            )}

            {modal && (
                <Modal
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    saveExpense={saveExpense}
                    editExpense={editExpense}
                />
            )}
        </div>
    );
}

export default App;
