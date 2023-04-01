import { useEffect } from "react"
import { useRouter } from "next/router"
import { useContext } from "react"
import { UserContext } from "./_app"

export default function Middleware() {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        console.log(user)
        if (user.jwt === '') {
            alert("You are not logged in");
            router.push('/')
        } else {
            setUser({ ...user, role: 'manager' })

            router.push('/manager')
        }
        
        // jswt decode

        
    }, [])

    return (
        <div>
            <h1>Middleware</h1>
        </div>
    )
}