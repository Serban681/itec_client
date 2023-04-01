import { useForm } from "@/utils/useForm"
import { useRouter } from "next/router"

export default function createUser() {
    const {formData, handleInputChange} = useForm({email: '', password: '', role: 'manager'})

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(formData.role === 'manager') {
            router.push('/userlist')
        } else {
            router.push('/create-employee')
        }
        console.log(formData)
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