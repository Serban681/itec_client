import styles from '../styles/CreateUser.module.css'
import { useForm } from '@/utils/useForm'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'

import { useDaysWoked } from '@/utils/useDaysWorked'

export default function CreateUser() {
    const {formData, handleInputChange } = useForm({name: '', 'email': '', 'bio': '', 'position': ''})

    const [startDate, setStartDate] = useState(new Date())

    const { totalDays, calculateTotalDays } = useDaysWoked()

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://localhost:5000/api/${totalDays > 365 ? 'oldemployees' : 'newemployees'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then(data => console.log(data))


        console.log(formData)
        console.log(startDate)
    }

    const handleDateChange = (date) => {
        setStartDate(date)
        calculateTotalDays(date)
    }

    return (
        <div>
            <h1>Create Employee</h1>

            <form onSubmit={handleSubmit} className={styles.container}>
                <label htmlFor="name">
                    Name
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} />
                </label>

                <label htmlFor="email">
                    Email
                    <input type="text" name="email" id="email" value={formData.email} onChange={handleInputChange} />
                </label>

                <label htmlFor="position">
                    Position
                    <input type="text" name="position" id="position" value={formData.position} onChange={handleInputChange} />
                </label>

                
                <label>
                    Start Date
                    <DatePicker selected={startDate} onChange={(date) => handleDateChange(date)} />
                </label>

                <p>Days Worked: {totalDays}</p>

                <label htmlFor="bio">
                    Bio
                    <br />
                    <textarea name="bio" id="bio" value={formData.bio} onChange={handleInputChange}></textarea>
                </label>

                <button type="submit">Create User</button>
            </form>
        </div>
    )
}

{/* <form className={styles.edit_container}>
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
</form> */}