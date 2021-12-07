import React from 'react'
import { useState } from "react"

const BookingForm = () => {
    const [bookingData, setBookingData] = useState({
        date: "",
        roomServices: {
            newspaper: "",
            breakfast: ""
        },
        spaActivities: [],

    });

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputType = event.target.type;
        const inputChecked = event.target.checked;

        if (inputType === "datetime-local") {
            setBookingData({ ...bookingData, date: inputValue });
        }

        if (inputName === "newspaper") {
            setBookingData({
                ...bookingData, roomServices: {
                    newspaper: inputChecked,
                    breakfast: bookingData.roomServices.breakfast

                }
            });
        }

        if (inputName === "breakfast") {
            setBookingData({
                ...bookingData, roomServices: {
                    newspaper: bookingData.roomServices.newspaper,
                    breakfast: inputChecked
                }
            });
        }
        if ((inputName === "pool" && inputChecked === true) || (inputName === "massage" && inputChecked === true) || (inputName === "facial" && inputChecked === true)) {
            setBookingData({ ...bookingData, spaActivities: [...bookingData.spaActivities, inputName] });
        }

        if ((inputName === "pool" && inputChecked === false) || (inputName === "facial" && inputChecked === false) || (inputName === "facial" && inputChecked === false)) {
            const newArray = [...bookingData.spaActivities]
            const index = newArray.indexOf(inputName)
            newArray.splice(index, 1);
            setBookingData({ ...bookingData, spaActivities: [...newArray] });
        }


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
            <section>
                <h3>Spa Activities</h3>
                <input type="checkbox" id="pool" name="pool" onChange={handleChange} />
                <label htmlFor="pool">Soak and Swim</label>
                <input type="checkbox" id="facial" name="facial" onChange={handleChange} />
                <label htmlFor="facial">Facial</label>
                <input type="checkbox" id="massage" name="massage" onChange={handleChange} />
                <label htmlFor="massage">Massage</label>
            </section>
            <section>
                <h3>Room Services</h3>
                <input type="checkbox" id="newspaper" name="newspaper" onChange={handleChange} checked={bookingData.roomServices.newspaper} />
                <label htmlFor="newspaper">Daily Newspaper</label>
                <input type="checkbox" id="breakfast" name="breakfast" onChange={handleChange} checked={bookingData.roomServices.breakfast} />
                <label htmlFor="breakfast">Breakfast</label>
            </section>
            <button type="submit">Book</button>
        </form>
    )
}

export default BookingForm
