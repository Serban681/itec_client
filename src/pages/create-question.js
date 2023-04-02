import { useForm } from "@/utils/useForm"
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./_app"
import { toast } from "react-toastify"

export default function createQuestion() {
    const {formData, handleInputChange} = useForm({title: '', isrequired: false, type: 0, form: 0})

    const router = useRouter()

    const {user, roles, setRoles} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5140/api/questions', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: formData.title,
                isrequired: formData.isrequired,
                type: formData.type,
                formtype: formData.formtype
            })
        })
            .then(async res => {
                const data = await res.json()
                if(res.status === 400){
                    toast.error(data[0]?.code)
                }
                console.log(res.status)
            } )
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Title
                <input type="text" name="title" value={formData.title} onChange={handleInputChange}/>
            </label>
            <label className={styles.label}>
                Is required
                <div>
                    <input size={15} type="checkbox" name="isrequired" value={formData.isrequired} onChange={handleInputChange}/>
                </div>
            </label>
            <br/>
            <label className={styles.label}  htmlFor="questions">
                Question Type:
                <br/>
                <select className={styles.label} name="type" id="type" value={formData.type} onChange={handleInputChange}>
                    <option type="number" value={0}>Text</option>
                    <option type="number" value={1}>Dropdown</option>
                    <option type="number" value={2}>Radio Buttons</option>
                </select>
            </label>
            <br/><br/>
            <label className={styles.label}  htmlFor="formtype">
                Role:
                <br/>
                <select className={styles.label} type="number" name="formtype" id="formtype" value={formData.formtype} onChange={handleInputChange}>
                    <option type="number" value={0}>Frontend</option>
                    <option type="number" value={1}>Backend</option>
                    <option type="number" value={2}>Soft skills</option>
                </select>
            </label>
            <br/><br/>
            <button type={"submit"}>Create</button>
        </form>
    )
}