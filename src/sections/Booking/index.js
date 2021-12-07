import { useState } from "react"

function BookingSection() {
  const [date, setDate] = useState("")
  const [spaActivities, setSpaActivities] = useState([])
  const [roomServices, setRoomServices] = useState({
    newspaper: false,
    breakfast: false,
  })

  console.log({ date, spaActivities, roomServices })

  function handleDateInput(event) {
    const inputValue = event.target.value

    setDate(inputValue)
  }

  function handleSpaActivities(event) {
    const inputName = event.target.name

    const foundSpaActivity = spaActivities.find(
      activity => activity === inputName
    )

    if (foundSpaActivity) {
      const updatedSpaActivities = spaActivities.filter(
        activity => activity !== inputName
      )

      setSpaActivities(updatedSpaActivities)
    } else {
      setSpaActivities([...spaActivities, inputName])
    }
  }

  function handleRoomServices(event) {
    const inputName = event.target.name

    const updatedRoomServices = {
      ...roomServices,
      [inputName]: !roomServices[inputName],
    }

    setRoomServices(updatedRoomServices)
  }

  return (
    <section className="shadow pad-lg">
      <h2>Booking Form</h2>
      <form className="form-stack">
        <label htmlFor="date">When will you be arriving?</label>
        <input type="datetime-local" onChange={handleDateInput} />
        <section>
          <h3>Spa Activities</h3>
          <input
            type="checkbox"
            id="pool"
            name="pool"
            onChange={handleSpaActivities}
            checked={spaActivities.includes("pool")}
          />
          <label htmlFor="pool">Soak and Swim</label>
          <input
            type="checkbox"
            id="facial"
            name="facial"
            onChange={handleSpaActivities}
            checked={spaActivities.includes("facial")}
          />
          <label htmlFor="facial">Facial</label>
          <input
            type="checkbox"
            id="massage"
            name="massage"
            onChange={handleSpaActivities}
            checked={spaActivities.includes("massage")}
          />
          <label htmlFor="massage">Massage</label>
        </section>
        <section>
          <h3>Room Services</h3>
          <input
            type="checkbox"
            id="newspaper"
            name="newspaper"
            onChange={handleRoomServices}
            value={roomServices.newspaper}
          />
          <label htmlFor="newspaper">Daily Newspaper</label>
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            onChange={handleRoomServices}
            value={roomServices.breakfast}
          />
          <label htmlFor="breakfast">Breakfast</label>
        </section>
        <button type="submit">Book</button>
      </form>
    </section>
  )
}

export default BookingSection
