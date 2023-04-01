import { useForm } from "@/utils/useForm"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function createUser() {
    const {formData, handleInputChange} = useForm({email: '', password: '', role: 'manager'})

    const router = useRouter()

    const [roles, setRoles] = useState([{}])

    useEffect(() => {
        fetch('http://localhost:5140/api/roles')
            .then(async res => console.log(await res.json()))
            // .then(data => console.log(data))
            // .then(data => console.log(data))
            // .then(data => setRoles(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:5140/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
                    <option value="old_employee">Old Employee</option>
                    <option value="new_employee">New Employee</option>
                </select>
            </label>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}