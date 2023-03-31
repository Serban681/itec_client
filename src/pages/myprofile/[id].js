import DatePicker from "react-datepicker"
import { useForm } from "../../utils/useForm";

import styles from "@/styles/MyProfile.module.css";

import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css"

import { UserContext } from "../_app";
import { useContext } from "react";

import { useRouter } from "next/router";

export default function MyProfile({  }) {
    const [startDate, setStartDate] = useState(new Date())

    const {formData, handleInputChange} = useForm({name: '', email: '', position: ''})
    
    const { user } = useContext(UserContext)

    const router = useRouter()
    const { id } = router.query

    const saveEdit = (e) => {
        e.preventDefault()
        console.log(startDate)
        console.log(formData)
    }

    const handleClick = () => {
        console.log(id)
    }

    return (
        <div>
            <h1>My Profile</h1>
            
            <form className={styles.edit_container}>
                <label >
                    Name
                    <br />
                    <input readOnly={!(user.role === 'manager')} name="name" value={formData.name} type="text" onChange={handleInputChange} />
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
                {user.role === 'manager' &&  <button type="submit" onClick={saveEdit}>Save</button>}
            </form>

            <button onClick={() => handleClick()}>Click me</button>
        </div>
    )
}