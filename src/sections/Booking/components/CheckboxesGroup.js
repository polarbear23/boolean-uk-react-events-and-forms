import React from 'react'

const CheckboxesGroup = (props) => {
    return (

        props.name === "spa" ? (<section>
            <h3>Spa Activities</h3>
            <input type="checkbox" id="pool" name="pool" onChange={props.handleChange} />
            <label htmlFor="pool">Soak and Swim</label>
            <input type="checkbox" id="facial" name="facial" onChange={props.handleChange} />
            <label htmlFor="facial">Facial</label>
            <input type="checkbox" id="massage" name="massage" onChange={props.handleChange} />
            <label htmlFor="massage">Massage</label>
        </section>) : (<section>
            <h3>Room Services</h3>
            <input type="checkbox" id="newspaper" name="newspaper" onChange={props.handleChange} checked={props.roomServices.newspaper} />
            <label htmlFor="newspaper">Daily Newspaper</label>
            <input type="checkbox" id="breakfast" name="breakfast" onChange={props.handleChange} checked={props.roomServices.breakfast} />
            <label htmlFor="breakfast">Breakfast</label>
        </section>)

    )
}

export default CheckboxesGroup
