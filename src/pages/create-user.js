import { useForm } from "@/utils/useForm"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "./_app"

export default function createUser() {
    const {formData, handleInputChange} = useForm({email: '', password: '', role: 'manager'})

    const router = useRouter()

    const { roles, setRoles } = useContext(UserContext)

    useEffect(() => {        
        // .then(data => console.log(data))
        // .then(data => setRoles(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(roles[formData.role])
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
        .then(res => {
            console.log(res)
        })
        .then(data => {
            
        })
        .catch(err => console.log(err))
        
        // if(formData.role === 'manager') {
        //     router.push('/userlist')
        // } else {
        //     router.push('/create-employee')
        // }
        // console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Password
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} />
            </label>
            <br />
            <label htmlFor="role">
                Role
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