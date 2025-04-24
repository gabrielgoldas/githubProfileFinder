import { UserProps } from "../../types/user"
import styles from "./User.module.css"

const User = ({ avatar_url, login, bio }: UserProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar_url} alt={login} />
      <div className={styles.content}>
        <h2 className={styles.login}>{login}</h2>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  )
}

export default User