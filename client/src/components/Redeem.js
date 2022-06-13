import React,{useState, useEffect} from 'react'
import styles from '../pages/login/Login.module.css'
import Transaction from './../pages/home/TransactionForm';
import axios from 'axios';
import { useAuthContext } from './../hooks/useAuthContext';

const Redeem = () => {
 const [redeem, setRedeem] = useState('')
 const { user } = useAuthContext()
 const [code, setCode] = useState(null)
const uid = user.data.user._id
const balance = user.data.user.balance

/*
1- نسوي مصفوفة جديدة فاضية
2- اذا المستخدم كتب كود وانشحن رصيده
3- الكود اللي كتبه راح تنضاف للمصفوفة الفاضية
4- نستخدم يوز افكت نتابع التغييرات
5- نشيك إذا المصفوفة اللي سويناها عندها قيمه تطابق مصفوفة الاكواد
6- إذا كانت تطابق نحذف القيمة المطابقة من مصفوفة الاكواد
*/
//    useEffect(() => {
//   console.log(removedArray)
//  const codes = ['DLAW-ASLX-QLSA', 'SAQPA-SLSX-APXAQ', 'DLSO-QLZW-DXPZ']
//  const objectCodes =
//   {
//   redeem: codes,
//   expired: false
//   }
//  console.log(redeem)

//  setCode(objectCodes)
//   }, [removedArray])

// useEffect(() => {
//   const d = async () => {
//   const b = await axios.get('http://localhost:5000/code/get')
//   // setCode(...b.data.code)
//   const h = b.data.code
//   const a = h.find(o => o.redeemCode === 'y')
//   const k = a.redeemCode
//   setCode(k)
//   }
//   d();
// }, [])

 const handlerCode = async (e) => {
  e.preventDefault();
   const b = await axios.get('http://localhost:5000/code/get')
  // setCode(...b.data.code)
  const h = b.data.code
  const a = h.find(o => o.redeemCode === redeem)
  const k = a.redeemCode
  const m = a.amount
  console.log(m)
  if(k) {
   axios.post(`http://localhost:5000/user/d/${uid}`, {
    balance: balance + m
    })
        alert('$2000 Added successfully')
   axios.delete(`http://localhost:5000/code/delete/${redeem}`, {
    })
  }
}
  return (
  <form onSubmit={handlerCode} className={styles['login-form']}>
      <h2>Reedem</h2>
      <label>
        <span>Code</span>
        <input type="username" 
        onChange={(e) => setRedeem(e.target.value)}
        value={redeem}
        />
      </label>
     <button className="btn">Submit</button>

    </form>
  )
}

export default Redeem