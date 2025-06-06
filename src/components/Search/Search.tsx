import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from "./Search.module.css"

type SearchProps = {
  loadUser: (username: string) => Promise<void>
}

const Search = ({ loadUser }: SearchProps) => {
  const [username, setUsername] = useState("")

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      loadUser(username)
      setUsername("")
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input} 
        type="text" 
        value={username}
        placeholder='Digite um usuário do GitHub' 
        onChange={(ev) => setUsername(ev.target.value)} 
        onKeyDown={handleKeyDown}
      />
      <button 
        className={styles.button} 
        type='button' 
        onClick={() => {
          loadUser(username)
          setUsername("")
        }}
      >
        <BsSearch className={styles.icon}/>
      </button>
    </div>
  )
}

export default Search;
