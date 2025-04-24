import styles from './Loading.module.css'
import loading from '../../assets/3-dots-move.svg'

const Loading = () => {
  return (
    <div className={styles.loading_container}>
      <img className={styles.loader} src={loading} alt="Ícone de carregamento" />
    </div>
  )
}

export default Loading