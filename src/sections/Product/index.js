import { useState } from "react"
import ColorSquare from "./components/ColorSquare"

function ProductSection() {
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [quantity, setQuantity] = useState("")

  console.log({ size, color, quantity })

  function handleSizeRadioInput(event) {
    const inputValue = event.target.value

    setSize(inputValue)
  }

  function handleColorSelectInput(event) {
    const inputValue = event.target.value

    setColor(inputValue)
  }

  function handleQuantityInput(event) {
    const inputValue = event.target.value

    setQuantity(inputValue)
  }

  function handleSubmit(event) {
    event.preventDefault()

    const productData = { size, color, quantity }

    console.log({ productData })
  }

  return (
    <section className="shadow pad-lg">
      <h2>Awesome T-Shirt</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tristique neque a magna pharetra, et tempus ex fringilla. Sed
        venenatis leo eget neque.
      </p>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label>Size</label>
        <input
          type="radio"
          id="size-sm"
          name="size"
          value="small"
          onChange={handleSizeRadioInput}
          checked={size === "small"}
        />
        <label htmlFor="size-sm">S</label>
        <input
          type="radio"
          id="size-md"
          name="size"
          value="medium"
          onChange={handleSizeRadioInput}
          checked={size === "medium"}
        />
        <label htmlFor="size-md">M</label>
        <input
          type="radio"
          id="size-lg"
          name="size"
          value="large"
          onChange={handleSizeRadioInput}
          checked={size === "large"}
        />
        <label htmlFor="size-lg">L</label>
        <label htmlFor="size">Color</label>
        <ColorSquare color={color} />
        <select id="size" onChange={handleColorSelectInput} value={color}>
          <option value="">Please Select a Color...</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          onChange={handleQuantityInput}
          value={quantity}
        />
        <button type="submit">Buy</button>
      </form>
    </section>
  )
}

export default ProductSection
