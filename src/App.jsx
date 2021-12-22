import { useState } from "react";
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

    const handleNewExpense = () => {
        setModal(true);

        setTimeout(() => {
            setModalAnimation(true);
        }, 500);
    };

    const saveExpense = (expense) => {
        expense.id = createId();
        expense.date = Date.now()
        setExpenses([...expenses, expense]);
        setModalAnimation(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    };

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                expenses = {expenses}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValid={isValid}
                setIsValid={setIsValid}
            />

            {isValid && (
                <>
                    <main>
                        <ExpensesList expenses={expenses} />
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
                />
            )}
        </div>
    );
}

export default App;
