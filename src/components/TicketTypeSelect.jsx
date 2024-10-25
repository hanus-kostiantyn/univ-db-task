import data from "../data/db.json";

function TicketTypeSelect({ value, onChange }) {
    return (
        <select name="type" value={value} onChange={onChange}>
            {data.ticketTypes.map((type) => (
                <option key={type.id} value={type.type_name}>
                    {type.type_name}
                </option>
            ))}
        </select>
    );
}

export default TicketTypeSelect;
