import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Filters from "./components/Filters";
import ExpensesList from "./components/ExpensesList";
import { createId } from "./helpers";
import newExpenseIcon from "./img/nuevo-gasto.svg";

function App() {
    const [presupuesto, setPresupuesto] = useState(
        Number(localStorage.getItem("presupuesto")) ?? 0
    );
    const [isValid, setIsValid] = useState(false);

    const [modal, setModal] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);

    const [expenses, setExpenses] = useState(
        localStorage.getItem("expenses")
            ? JSON.parse(localStorage.getItem("expenses"))
            : []
    );

    const [editExpense, setEditExpense] = useState({});

    const [filter, setFilter] = useState("");
    const [expensesFiltered, setExpensesFiltered] = useState([]);

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
            setEditExpense({});
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

    const deleteExpense = (id) => {
        const expensesUpdated = expenses.filter((expense) => expense.id !== id);
        setExpenses(expensesUpdated);
    };

    useEffect(() => {
        if (Object.keys(editExpense).length > 0) {
            setModal(true);

            setTimeout(() => {
                setModalAnimation(true);
            }, 500);
        }
    }, [editExpense]);

    useEffect(() => {
        localStorage.setItem("presupuesto", presupuesto ?? 0);
    }, [presupuesto]);

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
    }, [expenses]);

    useEffect(() => {
        if (filter) {
            //Filtrar gastos por categoría
            const expensesFiltered = expenses.filter( expense => expense.category === filter)
            setExpensesFiltered(expensesFiltered)
        }
    },[filter])

    useEffect(() => {
        const presupuestoLS = Number(localStorage.getItem("presupuesto")) ?? 0;

        if (presupuestoLS > 0) {
            setIsValid(true);
        }
    }, []);

    return (
        <div className={modal ? "fijar" : ""}>
            <Header
                expenses={expenses}
                setExpenses={setExpenses}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValid={isValid}
                setIsValid={setIsValid}
            />

            {isValid && (
                <>
                    <main>
                        <Filters filter={filter} setFilter={setFilter} />
                        <ExpensesList
                            expenses={expenses}
                            editExpense={editExpense}
                            setEditExpense={setEditExpense}
                            deleteExpense={deleteExpense}
                            filter={filter}
                            expensesFiltered={expensesFiltered}
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
                    setEditExpense={setEditExpense}
                />
            )}
        </div>
    );
}

export default App;
