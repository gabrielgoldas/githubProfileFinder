import Search from './components/Search/Search'
import styles from "./App.module.css"
import { useState } from 'react'
import { UserProps } from './types/user'
import User from './components/User/User'


function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
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
    </div>
  )
}

export default App
