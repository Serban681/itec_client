import { useEffect } from "react"
import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "./_app"

import jwt_decode from "jwt-decode";

export default function Middleware() {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5140/api/roles').then(res => res.json()).then(data => console.log(data))

        const token = sessionStorage.getItem('token')
        
        const decoded = jwt_decode(token)

        const { jti, iat, role } = decoded

        setUser({ role, iat, jti })

        // console.log(user)

        if(token !== '') {
            if (role === 'manager') {
                router.push('/userlist')
            } else {

            }
        } else {
            router.push('/')
        }
    }, [])

    return (
        <div>
            <h1>Middleware</h1>
        </div>
    )
}