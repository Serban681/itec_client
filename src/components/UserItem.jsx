import styles from "@/styles/UserItem.module.css"
import { useEffect, useState } from "react"

import { useRouter } from "next/router"

import { useDaysWoked } from "@/utils/useDaysWorked"

export default function UserItem({ user }) {
    const [isBioHidden, hideBio] = useState(false)
    const router = useRouter()

    const { totalDays, calculateTotalDays } = useDaysWoked()

    const toggleBio = () => {
        console.log(user)
        hideBio(!isBioHidden)
    }

    const goToEdit = () => {
        // router.push(`/myprofile/${user.id}`)
        router.push(`/myprofile/${user.userId}`)
    }

    useEffect(() => {
        calculateTotalDays(user.startedWorking)
    })
    
    // const [toggleEdit, setEdit] = useState(false)

    return (
        <div className={styles.main_container}>
            <div className={styles.info_container}>
                {/* <div>Profile Image</div> */}
                <div>{user.name}</div>
                <div>{user.position}</div>
                <div>{user.email}</div>
                <div>{totalDays} days</div>
                {/* <div>{user.date}</div> */}
                <button onClick={() => toggleBio()}>Bio</button>

                
            </div>

            <div className={`${!isBioHidden && 'hide'}`}>
                <div className={` ${styles.bio_container}`}>
                    {user.bio}
                    <br />
                    <button onClick={() => goToEdit()}>Edit</button>
                </div>
            </div>
        </div>
    )
}