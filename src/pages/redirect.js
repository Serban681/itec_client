import { useEffect } from "react"
import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "./_app"

import jwt_decode from "jwt-decode";

export default function Middleware() {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        
        const decoded = jwt_decode(token)

        const { jti, iat, role } = decoded

        setUser({ role, iat, jti })

        // console.log(user)

        if(token !== '') {
            if (role === 'manager' || role === 'old_employee') {
                router.push('/userlist')
            } else {
                // router.push(`/myprofile/${user.id}`)
            }
        } else {
            router.push('/')
        }
    }, [])

    return (
        <></>
    )
}