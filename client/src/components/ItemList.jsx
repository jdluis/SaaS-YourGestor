import { useEffect, useState } from "react"
import { getAllinventary } from "../api/inventary.api";


export default function ItemList() {
    const [items, setItems] = useState([])

    const loadInventary = async () => {
        const response = await getAllinventary();
        setItems(response.data)
        console.log(response.data);
    }
    useEffect(() => {
        loadInventary()
    }, [])
    return (
        <div>
            <h2>Item List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Model</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {items?.map(item => (
                        <tr key={item.id}>
                            <td>{item.label}</td>
                            <td>{item.model}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
