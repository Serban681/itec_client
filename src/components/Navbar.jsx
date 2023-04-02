import styles from '@/styles/Navbar.module.css'

import { useRouter } from 'next/router'

import { UserContext } from '@/pages/_app'
import { useContext } from 'react'

export default function Navbar() {
    const { user } = useContext(UserContext)

    const router = useRouter()

    const goToCreateUser = () => {
        router.push('/create-user')
    }

    const goToAllUsers = () => {
        router.push('/userlist')
    }
    const goToMatches = () => {
        router.push('/create-user')
    }
    const goToQuestions= () => {
        router.push('/question')
    }

    const goToMyProfile = () => {
        router.push(`/myprofile/${user.userId}`)
    }

    return (
        <div className={styles.container}>
            <div className="logo"></div>
            <div className="title">My localhost 3000</div>
            <div>
                <button onClick={goToAllUsers} className={styles.btn}>All Users</button>
                <button onClick={goToCreateUser} className={styles.btn}>Add user</button>
                <button onClick={goToMyProfile} className={styles.btn}>My Profile</button>
                <button onClick={goToQuestions} className={styles.btn}>Questions</button>
            </div>
        </div>
    )
}
