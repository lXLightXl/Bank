import {useState, useEffect} from 'react'
import React from 'react'
import { useFirestore } from './../../hooks/useFirestore';
import axios from 'axios';
import { useAuthContext } from './../../hooks/useAuthContext';


const Transaction = ({uid, balance}) => {
 const [name, setName] = useState('')
 const [amount, setAmount] = useState('') 
 const [token, setToken] = useState(null)
const { dispatch } = useAuthContext();

 const handleSubmit = async (e) => {
  e.preventDefault()
  const s = await axios.get("http://localhost:5000/user/getUser/")
  const use = s.data.users
  let obj = use.find(o => o.username === name)
  const tt = [obj.balance, amount - 1 + 1].reduce((a, b) => a + b)
    console.log(tt)
  if(balance >= amount) {
    axios.post(`http://localhost:5000/user/d/${uid}`, {
      balance: balance - amount
    })
      dispatch({type: 'UPDATE_USER_BALANCE', payload: balance - 100 })

  axios.post(`http://localhost:5000/user/da/${name}`, {
  balance: tt
 })


 axios.post("http://localhost:5000/doc/add", {
    name,
    amount,
  }).then(response => {
      console.log(response)
 })
  } else {
    console.log('No enough balance')
  }
 }


  return (
    <>
    <h3>Add a transction</h3>
    <form onSubmit={handleSubmit}>
     <label>
      <span>Transcation name:</span>
      <input type="text" required onChange={(e) => setName(e.target.value)} value={name}/>
     </label>
          <label>
      <span>Amount ($)</span>
      <input type="number" required onChange={(e) => setAmount(e.target.value)} value={amount}/>
     </label>
     <button>Add A transction</button>
    </form>
    </>
  )
}

export default Transaction