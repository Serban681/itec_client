import DatePicker from "react-datepicker"
import { useForm } from "../../utils/useForm";

import styles from "@/styles/MyProfile.module.css";

import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css"

import { UserContext } from "../_app";
import { useContext } from "react";

import { useRouter } from "next/router";

import { useDaysWoked } from "../../utils/useDaysWorked";

export default function MyProfile({  }) {
    const [startDate, setStartDate] = useState(new Date())

    const {formData, handleInputChange} = useForm({name: '', email: '', position: ''})
    
    const { user } = useContext(UserContext)

    const router = useRouter()
    const { id } = router.query

    const { totalDays, calculateTotalDays } = useDaysWoked()

    const handleDateChange = (date) => {
        setStartDate(date)
        calculateTotalDays(date)
    }

    const saveEdit = (e) => {
        e.preventDefault()
        console.log(startDate)
        console.log(formData)
    }

    const handleClick = () => {
        console.log(user.id)
    }

    return (
        <div>
            <h1>My Profile</h1>
            
            <form className={styles.edit_container}>
                <label >
                    Name
                    <br />
                    <input name="name" value={formData.name} type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Email
                    <br />
                    <input name="email" value={formData.email} type="email" onChange={handleInputChange} />
                </label>
                <label>
                    Position
                    <br />
                    <input readOnly={!(user.role === 'manager')} name="position" value={formData.position} type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Start Date
                    <br />
                    <DatePicker readOnly={!(user.role === 'manager')} selected={startDate} onChange={(date) => handleDateChange(date)} />
                </label>
                <p>Days Worked: {totalDays}</p>

                <label htmlFor="bio">
                    Bio
                    <br />
                    <textarea name="bio" id="bio" value={formData.bio} onChange={handleInputChange}></textarea>
                </label>
                {/* {user.id === id &&  <button type="submit" onClick={saveEdit}>Save</button>} */}
                <button disabled={!(user.id == id || user?.role === 'manager')} type="submit" onClick={saveEdit}>Save</button>
            </form>

            {/* <button onClick={() => handleClick()}>Click me</button> */}
        </div>
    )
}