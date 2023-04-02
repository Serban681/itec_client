import { useForm } from "@/utils/useForm"
import { useRouter } from "next/router"
import styles from '@/styles/Home.module.css'
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./_app"
import { toast } from "react-toastify"

export default function createUser() {
    const {formData, handleInputChange} = useForm({email: '', password: '', role: 'manager'})

    const router = useRouter()

    const {roles, setRoles} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log({
        //     roleId: roles[formData.role]
        // })
        
        fetch('http://localhost:5140/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                roleId: roles[formData.role]
            })
        }) 
        .then(async res => {
            const data = await res.json()

            if(res.status === 400) {
                toast.error(data[0].code)
            }
            console.log(res.status)
            if(res.status === 201) {
                if(formData.role === 'manager') {
                    router.push('/userlist')
                } else {
                    router.push('/create-employee')
                }
            }
        })
        .catch(err => toast.err('Internal Server Error'))
        
        // if(formData.role === 'manager') {
        //     router.push('/userlist')
        // } else {
        //     router.push('/create-employee')
        // }
        // console.log(formData)
    }

    return (
        <form  className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Email
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label className={styles.label}>
                Password
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <br />
            <label className={styles.role}  htmlFor="role">
                Role:
                <select name="role" id="role" value={formData.role} onChange={handleInputChange}>
                    <option value="manager">Manager</option>
                    <option value="oldemployee">Old Employee</option>
                    <option value="newemployee">New Employee</option>
                </select>
            </label>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}