import DatePicker from "react-datepicker"
import { useForm } from "./utils/useForm";

import styles from "@/styles/MyProfile.module.css";

import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css"

export default function MyProfile({ user }) {
    const [startDate, setStartDate] = useState(new Date())

    const {formData, handleInputChange} = useForm({name: '', email: '', position: ''})
    
    const saveEdit = (e) => {
        e.preventDefault()
        console.log(startDate)
        console.log(formData)
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
                    <input name="position" value={formData.position} type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Date
                    <br />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <button disabled={true} type="submit" onClick={saveEdit}>Save</button>
            </form>
        </div>
    )
}