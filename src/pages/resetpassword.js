import { useState } from "react"

import { useContext } from "react"
import { UserContext } from "./_app"
import { useForm } from "../utils/useForm"
import { useRouter } from "next/router"

export default function ResetPassword() {
    const {user} = useContext(UserContext)
    const router = useRouter()

    const { formData, handleInputChange } = useForm({oldPassword: '', newPassword: ''})

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:5140/api/users/changepassword/${user.userId}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    oldPassword: formData.oldPassword,
                    newPassword: formData.newPassword
                })
            })
            .then(res => res.json())
            .then(data => {
                router.push(`/myprofile/${user.userId}`)
            })
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Old Password
                    <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleInputChange} />
                </label>

                <label>
                    New Password
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Reset</button>
            </form>
            
        </div>
    )
}