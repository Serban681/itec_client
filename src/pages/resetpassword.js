import { useState } from "react"

export default function ResetPassword() {
    const [password, setPassword] = useState('')

    const handleClick = () => {
        console.log(password)
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleClick}>Reset</button>
        </div>
    )
}