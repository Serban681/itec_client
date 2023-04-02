import UserItem from "../components/UserItem"
import { useState } from "react"
import styles from '@/styles/UserList.module.css'
import { useContext } from "react"
import { UserContext } from "./_app"

import { useEffect } from "react"

export default function Manager() {
    const [oldEmployees, setOldEmployees] = useState([])
    const [newEmployees, setNewEmployees] = useState([])

    const { user } = useContext(UserContext)

    useEffect(() => {
        if(user.role === 'manager') {
            // fetch('http://localhost:5140/api/oldemployees')
            //     .then(res => res.json())
            //     .then(data => setUsers([...users, data[0]]))
                // .then(data => setUsers([...users, data]))
                // .then(data => setUsers([...users, data]))

            fetch('http://localhost:5140/api/oldemployees')
                .then(res => res.json())
                .then(data => setOldEmployees(data))

            fetch('http://localhost:5140/api/newemployees') // is all or just for the buddyyy?
                .then(res => res.json())
                .then(data => setNewEmployees(data))
                // .then(data => setUsers([...users, data]))

                // console.log(users)
        } 
                    // setUsers([...users, {name: data.name, email: data.email, position: data.position, bio: data.bio, startedWorking: data.startedWorking}]))
                // .then(data => console.log({name: data.name, email: data.email, position: data.position, bio: data.bio, startedWorking: data.startedWorking}))
                // .then(data => console.log(data))
        
        else {
          if(user.role === 'oldemployee') {
              fetch('http://localhost:5140/api/newemployees/buddyid/') // is all or just for the buddyyy?
                  .then(res => res.json())
                  .then(data => console.log(data))
              // .then(data => setUsers([...users, data]))
          }
        }
    }, [])

    return (
        <div className={styles.form}>
            <h1 className={styles.edit_header}>Manager</h1>
            {/*<div>*/}
            {/*    <div>Nume</div>*/}
            {/*    <div>Nume</div>*/}
            {/*    <div>Nume</div>*/}
            {/*    <div>Nume</div>*/}
            {/*</div>*/}
            {/* <UserItem user={{name: 'Ser', email: 'ser@gmail.com', position: 'sw eng'}} /> */}
            {oldEmployees.map((user, i) => <UserItem user={user} key={i} />)}
            {newEmployees.map((user, i) => <UserItem user={user} key={i} />)}
        </div>
    )
}