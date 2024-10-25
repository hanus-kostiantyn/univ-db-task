import { useState, useEffect } from "react";
import TicketTypeSelect from "./TicketTypeSelect";

function Form({ onSubmit, item }) {
    const [formData, setFormData] = useState({
        type: "",
        event_name: "",
        date: "",
        price: "",
    });

    useEffect(() => {
        if (item) {
            setFormData(item);
        }
    }, [item]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ type: "", event_name: "", date: "", price: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TicketTypeSelect value={formData.type} onChange={handleChange} />
            <input
                type="text"
                name="event_name"
                value={formData.event_name}
                onChange={handleChange}
                placeholder="Event Name"
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
            />
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
            />
            <button type="submit">{item ? "Update" : "Add"}</button>
        </form>
    );
}

export default Form;
