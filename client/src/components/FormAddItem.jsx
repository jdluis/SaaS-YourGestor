

import { addNewItem } from "../api/inventary.api";
import {useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function FormAddItem() {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
       await addNewItem(data)
        navigate("/inventary")
    })

    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Label" {...register('label', {required: true})}/>
                <input type="text" placeholder="Model" {...register('model', {required: true})}/>
                <input type="number" placeholder="Price" {...register('price', {required: true})}/>
                <input type="text" placeholder="S/N" {...register('sn', {required: true})}/>
                <select defaultValue={"select"} name="category" id="category" {...register('category', {required: true})}>
                    <option disabled value={"select"} >Select One</option>
                    <option value="POR">Portatil</option>
                    <option value="OSM">Ordenador de Sobremesa</option>
                    <option value="PAN">Pantalla</option>
                    <option value="RAT">Ratón</option>
                </select>
                <select defaultValue={"select"} name="status" id="status" {...register('status', {required: true})}>
                    <option disabled value={"select"}  >Select One</option>
                    <option value="OK">Good</option>
                    <option value="AVERIA">Not Good</option>
                    <option value="ROTO">Broke</option>
                    <option value="REPARANDO">Reparando</option>
                </select>
                <button>Send</button>
            </form>
        </div>
    )
}