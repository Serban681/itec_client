import UserItem from "../components/UserItem"
import { useState } from "react"

import { useContext } from "react"
import { UserContext } from "./_app"

import { useEffect } from "react"

export default function Manager() {
    const [users, setUsers] = useState([])

    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log(user)
    })

    return (
        <div>
            <h1>Manager</h1>

            <UserItem user={{name: 'Ser', email: 'ser@gmail.com', position: 'sw eng'}} />
            {/* {users.map((user) => <UserItem user={user} />)} */}
        </div>
    )
}