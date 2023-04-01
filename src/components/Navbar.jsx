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
            <h3 className="logo">This is the logo</h3>
            <div>
                <button onClick={goToAllUsers} className={styles.button}>All Users</button>
                <button onClick={goToCreateUser}>Add user</button>
            </div>
        </div>
    )
}