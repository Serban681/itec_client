import styles from "@/styles/UserItem.module.css"
import { useState } from "react"

import { useRouter } from "next/router"

export default function UserItem({ user }) {
    const [isBioHidden, hideBio] = useState(false)
    const router = useRouter()

    const toggleBio = () => {
        hideBio(!isBioHidden)
    }

    const goToEdit = () => {
        router.push(`/myprofile/${28913}`)
    }

    
    // const [toggleEdit, setEdit] = useState(false)

    return (
        <div className={styles.main_container}>
            <div className={styles.info_container}>
                <div>Profile Image</div>
                <div>{user.name}</div>
                <div>{user.position}</div>
                <div>{user.email}</div>
                <div>Date</div>
                {/* <div>{user.date}</div> */}
                <button onClick={() => toggleBio()}>Bio</button>

                
            </div>
            <div className={`${!isBioHidden && 'hide'}`}>
            <div className={` ${styles.bio_container}`}>
                Hello I'm Sam. And I code everyday
                <br />
                <button onClick={() => goToEdit()}>Edit</button>
            </div>
            </div>
        </div>
    )
}