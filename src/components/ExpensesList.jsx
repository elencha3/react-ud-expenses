import React from "react";
import Expense from "./Expense";

const ExpensesList = ({ expenses }) => {
    return (
        <div>
            <div className="listado-gastos contenedor">
                <h2>{expenses.length ? "Gastos" : "No hay gastos"}</h2>
                {expenses.map( expense => (
                    <Expense
                    key = {expense.id}
                    expense = {expense}/>
                ))}
            </div>
        </div>
    );
};

export default ExpensesList;
