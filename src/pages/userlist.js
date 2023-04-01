import UserItem from "../components/UserItem"
import { useState } from "react"

import { useContext } from "react"
import { UserContext } from "./_app"

import { useEffect } from "react"

export default function Manager() {
    const [users, setUsers] = useState([])

    const { user } = useContext(UserContext)

    useEffect(() => {
        if(user.role === 'manager') {
            fetch('http://localhost:5140/api/oldemployees')
                .then(res => res.json())
                .then(data => console.log(data))
                // .then(data => setUsers([...users, data]))

            fetch('http://localhost:5140/api/newemployees') // is all or just for the buddyyy?
                .then(res => res.json())
                .then(data => console.log(data))
                // .then(data => setUsers([...users, data]))
        }
        else {
            fetch('http://localhost:5140/api/newemployees') // is all or just for the buddyyy?
                .then(res => res.json())
                .then(data => console.log(data))
                // .then(data => setUsers([...users, data]))
        }
    })

    return (
        <div>
            <h1>Manager</h1>

            {/* <UserItem user={{name: 'Ser', email: 'ser@gmail.com', position: 'sw eng'}} /> */}
            {users.map((user) => <UserItem user={user} />)}
        </div>
    )
}