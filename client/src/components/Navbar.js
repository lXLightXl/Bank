import styles from './Navbar.module.css'
import {Link} from "react-router-dom"
import {useLogout} from '.././hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext';

export const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext();
console.log(user)
  return (
    <nav className={styles.navbar}>
     <ul>
      <li className={styles.title}>My Money</li>

      {!user && (
      <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Signup</Link></li>
      </>
      )}
      {user && (
        <>
        <li>hello {user.data.user.username} Your balance is ${user.data.user.balance} Level {user.data.user.level} Exp {user.data.user.exp}</li>
      <li>
        <button onClick={logout}className="btn">Logout</button>
        <button><Link to='redeem' className="btn">Redeem Code</Link></button>
      </li>
      </>
      )}
     </ul>
    </nav>
  )
}
