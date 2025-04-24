import Search from './components/Search/Search'
import styles from "./App.module.css"
import { useState } from 'react'
import { UserProps } from './types/user'
import User from './components/User/User'
import Error from './components/Error/Error'


function App() {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async (username: string) => {
    setError(false)
    setUser(null)

    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()

    if (res.status === 404) {
      setError(true)
      return
    }

    const { avatar_url, login, bio } = data
    const userData: UserProps = { avatar_url, login, bio }

    setUser(userData)
  }

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <img className={styles.github_img} src="./src/assets/github-white.png" alt="Logo GitHub" />
        <h1>Perfil <b>GitHub</b></h1>
      </div>
      <Search loadUser={loadUser} />
      {user && <User {...user}/>}
      {error && <Error />}
    </div>
  )
}

export default App
