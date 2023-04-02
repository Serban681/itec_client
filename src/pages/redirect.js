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

        // console.log(decoded)

        const { jti, iat, role, id, changedpassword } = decoded

        setUser({ role, iat, jti, userId: id })

        if(token !== '') {
            // console.log(false)
            if(changedpassword === "False") {
                router.push('/resetpassword')    
            } else if (role === 'manager' || role === 'oldemployee') {
                router.push('/userlist')
            } else {
                router.push(`/myprofile/${user.userId}`)
            }
        } else {
            router.push('/')
        }
    }, [])

    return (
        <></>
    )
}