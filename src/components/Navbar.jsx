import styles from '@/styles/Navbar.module.css'

import { useRouter } from 'next/router'

export default function Navbar() {
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
        router.push('/myprofile')
    }

    return (
        <div className={styles.container}>
            <div className="logo"></div>
            <div>
                <button onClick={goToAllUsers} className={styles.btn}>All Users</button>
                <button onClick={goToCreateUser} className={styles.btn}>Add user</button>
                <button onClick={goToMatches} className={styles.btn}>Matches</button>
                <button onClick={goToQuestions} className={styles.btn}>Questions</button>
            </div>
        </div>
    )
}

/*
    useEffect(() => {
        router.push('/manager')
    }, [])

*/
