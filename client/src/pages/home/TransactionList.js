import styles from './Home.module.css'

export default function TransactionList({transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map((data) => (
        <li key={data.id}>
          <p className={styles.name}>{data.name}</p>
          <p className={styles.amount}>${data.amount}</p>
        </li>
      ))}
    </ul>
  )
      }