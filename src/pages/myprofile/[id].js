import DatePicker from "react-datepicker"
import { useForm } from "../../utils/useForm";

import styles from "@/styles/MyProfile.module.css";

import { useEffect, useState } from "react";

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

    useEffect(() => {
        // const token = sessionStorage.getItem('token')
        // console.log(token)

        // if(user.role === 'manager' || token === null) {
        //     router.push(`/userlist`)
        // }

        // fetch(`http://localhost:5140/${user.role === 'new_employee' ? 'newemployees' : 'oldemployess'}/${id}`)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
            // .then(data => setFormData(data))
    }, [])

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
        <div className={styles.container}>
            <h1 className={styles.edit_header}>My Profile</h1>  
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
                    <textarea className={styles.bio} name="bio" id="bio" value={formData.bio} onChange={handleInputChange}></textarea>
                </label>
                {/* {user.id === id &&  <button type="submit" onClick={saveEdit}>Save</button>} */}
                <button disabled={!(user.id == id || user?.role === 'manager')} type="submit" onClick={saveEdit}>Save</button>
            </form>

            {/* <button onClick={() => handleClick()}>Click me</button> */}
        </div>
    )
}