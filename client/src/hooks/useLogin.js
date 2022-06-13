import { useState, useEffect} from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext';
import axios  from 'axios';

export const useLogin = (result) => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [s, setS] = useState(false)
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
   setError(null)
   setIsPending(true)

   try{
   let item = {username, password}
   let result = await fetch('http://localhost:5000/user/login', {
    method: 'POST',
    headers:{
     "Content-Type": "application/json",
     "Accpet": 'application/json'
    },
    body: JSON.stringify(item)
   })
   result = await result.json();
   console.log(result)
   localStorage.setItem("token",JSON.stringify(result))
      dispatch({type: "LOGIN", payload: result})
      setIsPending(false)
      setError(null)
   }
   catch(err){
    setError(err.message)
    setIsPending(false)
   }
  }
     return {login, error, isPending}

}