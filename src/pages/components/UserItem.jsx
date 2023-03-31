import styles from "@/styles/UserItem.module.css"
import { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker"
import { useForm } from "../utils/useForm";

export default function UserItem({ user }) {
    const [isBioHidden, hideBio] = useState(false)
    const [isEditHidden, hideEdit] = useState(false)

    const [startDate, setStartDate] = useState(new Date())

    const {formData, handleInputChange} = useForm({name: '', email: '', position: ''})

    const toggleBio = () => {
        hideBio(!isBioHidden)
    }

    const toggleEdit = () => {
        console.log(isEditHidden)
        hideEdit(!isEditHidden)
    }

    const saveEdit = (e) => {
        e.preventDefault()
        console.log(startDate)
        console.log(formData)
    }

    // const [toggleEdit, setEdit] = useState(false)

    return (
        <div className={styles.main_container}>
            <div className={styles.info_container}>
                <div>Profile Image</div>
                <div>{user.nume}</div>
                <div>{user.position}</div>
                <div>{user.email}</div>
                <div>Date</div>
                {/* <div>{user.date}</div> */}
                <button onClick={() => toggleBio()}>Bio</button>

                
            </div>
            <div className={`${!isBioHidden && 'hide'}`}>
            <div className={` ${styles.bio_container}`}>
                Hello I'm Sam. And I code everyday
                <br />
                <button onClick={() => toggleEdit()}>Edit</button>
            </div>

            <div className={`${!isEditHidden && 'hide'}`}>
                <form className={styles.edit_container}>
                    <label>
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
                    <button type="submit" onClick={saveEdit}>Save</button>
                </form>
                </div>
            </div>
        </div>
    )
}