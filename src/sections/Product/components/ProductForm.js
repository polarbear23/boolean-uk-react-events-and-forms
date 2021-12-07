import React from 'react'
import { useState } from "react"
import ColorSquare from './ColorSquare'
const ProductForm = () => {
    const [productFormData, setProductFormData] = useState({
        size: "",
        color: "",
        quantity: 0,
    });

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputType = event.target.type;
        const inputId = event.target.id;

        if (inputType === "radio" && inputName === "size") {
            setProductFormData({ ...productFormData, size: inputValue });
        }

        if (inputId === "color") {
            setProductFormData({ ...productFormData, color: inputValue });

        }

        if (inputName === "quantity") {
            setProductFormData({ ...productFormData, quantity: inputValue });
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        const productData = {
            size: productFormData.size,
            color: productFormData.color,
            quantity: productFormData.quantity
        }

        console.log({ productData })
    }

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <label>Size</label>
            <input type="radio" id="size-sm" name="size" value="small" onChange={handleChange} />
            <label htmlFor="size-sm">S</label>
            <input type="radio" id="size-md" name="size" value="medium" onChange={handleChange} />
            <label htmlFor="size-md">M</label>
            <input type="radio" id="size-lg" name="size" value="large" onChange={handleChange} />
            <label htmlFor="size-lg">L</label>
            <label htmlFor="size">Color</label>
            <ColorSquare color={productFormData.color} />
            <select id="color" onChange={handleChange}>
                <option value="">Please Select a Color...</option>
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity" onChange={handleChange} />
            <button type="submit">Buy</button>
        </form>
    )
}

export default ProductForm
