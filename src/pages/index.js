
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import { useForm } from '../utils/useForm'
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {formData, handleInputChange} = useForm({email: '', password: ''})

  const router = useRouter()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    // fetch data from api

    router.push('/redirect')
  }

  return (
    <>
      <main className={styles.main}>
        <form onSubmit={handleLoginSubmit}>
          <label>Email
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>Password
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
