import { useState } from "react";
import TableView from "./components/TableView";
import Form from "./components/Form";
import data from "./data/db.json";
import "./styles.css";

function App() {
    const [tableData, setTableData] = useState(data);
    const [currentTable, setCurrentTable] = useState("tickets");
    const [editingItem, setEditingItem] = useState(null);

    const addOrEditItem = (item) => {
        const updatedData = { ...tableData };
        if (item.id) {
            updatedData[currentTable] = updatedData[currentTable].map((i) =>
                i.id === item.id ? item : i
            );
        } else {
            item.id = Date.now();
            updatedData[currentTable].push(item);
        }
        setTableData(updatedData);
        setEditingItem(null);
    };

    const deleteItem = (id) => {
        const updatedData = { ...tableData };
        updatedData[currentTable] = updatedData[currentTable].filter(
            (item) => item.id !== id
        );
        setTableData(updatedData);
    };

    return (
        <div className="App">
            <h1>Database Management</h1>
            <div>
                <button onClick={() => setCurrentTable("tickets")}>
                    Tickets
                </button>
                <button onClick={() => setCurrentTable("customers")}>
                    Customers
                </button>
                <button onClick={() => setCurrentTable("orders")}>
                    Orders
                </button>
                <button onClick={() => setCurrentTable("events")}>
                    Events
                </button>
                <button onClick={() => setCurrentTable("ticketTypes")}>
                    Ticket Types
                </button>
            </div>
            <TableView
                data={tableData[currentTable]}
                onEdit={setEditingItem}
                onDelete={deleteItem}
            />
            <Form onSubmit={addOrEditItem} item={editingItem} />
        </div>
    );
}

export default App;
