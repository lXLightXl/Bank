import { useAuthContext } from '../../hooks/useAuthContext'
// styles
import styles from './Home.module.css'
import axios from 'axios';

// components
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import useCollection from './../../hooks/useCollection';
import { useEffect, useState } from 'react';
import './Home2.css'
export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('transactions')
  const [balance, setBalance] = useState('');
  const [data, setData] = useState(null)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.data.user._id} balance={user.data.user.balance} />
      </div>
    </div>
  )
}