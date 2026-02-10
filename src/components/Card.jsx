import styles from './Card.module.css'

function Card({ title, icon, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default Card
