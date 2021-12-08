import React from 'react'
import { useState } from "react"
import CheckboxesGroup from './CheckboxesGroup';
const BookingForm = () => {
    const [bookingData, setBookingData] = useState({
        date: "",
        roomServices: {
            newspaper: false,
            breakfast: false
        },
        spaActivities: [],

    });

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputType = event.target.type;
        const inputChecked = event.target.checked;
        let newData = {};
        if (inputType === "datetime-local") {
            newData = { ...bookingData, date: inputValue };
        }

        if (inputName === "newspaper") {
            newData = {
                ...bookingData, roomServices: {
                    newspaper: inputChecked,
                    breakfast: bookingData.roomServices.breakfast

                }
            };
        }

        if (inputName === "breakfast") {
            newData = {
                ...bookingData, roomServices: {
                    newspaper: bookingData.roomServices.newspaper,
                    breakfast: inputChecked
                }
            };
        }
        if ((inputName === "pool" && inputChecked === true) || (inputName === "massage" && inputChecked === true) || (inputName === "facial" && inputChecked === true)) {
            newData = { ...bookingData, spaActivities: [...bookingData.spaActivities, inputName] };
        }

        if ((inputName === "pool" && inputChecked === false) || (inputName === "massage" && inputChecked === false) || (inputName === "facial" && inputChecked === false)) {
            const newArray = [...bookingData.spaActivities]
            const index = newArray.indexOf(inputName)
            newArray.splice(index, 1);
            newData = { ...bookingData, spaActivities: [...newArray] };
        }
        setBookingData(newData);

    }

    function handleSubmit(event) {
        event.preventDefault()

        const productData = {
            date: bookingData.date,
            roomServices: {
                newspaper: bookingData.roomServices.newspaper,
                breakfast: bookingData.roomServices.breakfast
            },
            spaActivities: bookingData.spaActivities,

        }

        console.log({ productData })
    }

    return (
        <form className="form-stack" onSubmit={handleSubmit}>
            <label htmlFor="date">When will you be arriving?</label>
            <input type="datetime-local" onChange={handleChange} />
            <CheckboxesGroup name="spa" handleChange={handleChange} />
            <CheckboxesGroup handleChange={handleChange} roomServices={bookingData.roomServices} />
            <button type="submit">Book</button>
        </form>
    )
}

export default BookingForm
