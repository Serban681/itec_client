
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import { useForm } from '../utils/useForm'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

// import styles from '@/styles/Index.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {formData, handleInputChange} = useForm({email: 'admin@example.com', password: 'parola123'})

  const error = () => toast.error("Internal Server Error!")

  const router = useRouter()

  const handleLoginSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5140/api/auth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      sessionStorage.setItem('token', data.token)
      router.push('/redirect')
    }).catch(err => {
      toast.error("Invalid credentials!")
    })

    // console.log(await res.json())
    // .then(async res => {
    //   const data = await res.json()

    //   if(!res.ok) {
    //     const error = (data && data.message) || res.status
    //     return Promise.reject(error)
    //   }

    //   console.log(data)

    //   if(data.status === 200) {
    //     router.push('/redirect')
    //   } else if(data.status === 401) {
    //     toast.error("Invalid credentials!")
    //   } else {
    //     toast.error("Internal server error!")
    //   }
    // })
    // .then(data => {
    //   console.log(data)

    //   if(data.status === 200) {
    //     router.push('/redirect')
    //   } else if(data.status === 401) {
    //     toast.error("Invalid credentials!")
    //   } else {
    //     toast.error("Internal server error!")
    //   }
    // })
    // .catch(err => toast.error("Internal server error!"))
  }

  return (
    <>
      <main className={styles.container}>
        <form className={styles.form} onSubmit={handleLoginSubmit}>
          <label className={styles.label}>
            <div>Email</div>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <br />
          <label className={styles.label}>
            <div>Password</div>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <br />
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
