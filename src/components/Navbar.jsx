import styles from '@/styles/Navbar.module.css'

import { useRouter } from 'next/router'

export default function Navbar() {
    const router = useRouter()

    const goToCreateUser = () => {
        router.push('/create-user')
    }

    const goToAllUsers = () => {
        router.push('/manager')
    }

    return (
        <div className={styles.container}>
            <div className="logo"></div>
            <div>
                <button onClick={goToAllUsers} className={styles.btn}>All Users</button>
                <button onClick={goToCreateUser} className={styles.btn}>Add user</button>
            </div>
        </div>
    )
}