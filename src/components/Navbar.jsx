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
    const goToCreateQuestions= () => {
        router.push('/create-question')
    }

    const goToMyProfile = () => {
        router.push(`/myprofile/${user.userId}`)
    }

    return (
        <div className={styles.container}>
            <div className="logo"></div>
            <div>
                {user.role === 'manager' && <button onClick={goToAllUsers} className={styles.btn}>All Users</button>}
                {user.role === 'manager' && <button onClick={goToCreateUser} className={styles.btn}>Add user</button>}
                {user.role !== 'manager' && <button onClick={goToMyProfile} className={styles.btn}>My Profile</button>}
                {user.role === 'manager' && <button onClick={goToCreateQuestions} className={styles.btn}>Create Questions</button>}
                {/* {user.role === 'manager' && <button onClick={goToQuestions} className={styles.btn}>Questions</button>} */}
            </div>
        </div>
    )
}
