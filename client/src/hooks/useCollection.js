import {useState, useEffect} from 'react'
import {projectFirestore} from '../firebase/config'
import React from 'react'
import  axios from 'axios';

const useCollection = (collection) => {
 const [documents, setDoc] = useState(null)
 const [error, setError] = useState(null)
 useEffect(() => {

  const fetch = async () => {
  const g = await axios.get("http://localhost:5000/doc/get")
   setDoc(g.data.data)
  }
  fetch();

 // const unsub = ref.onSnapshot((snapshot) => {
 //  let results = []
 //  snapshot.docs.forEach(doc => {
 //   results.push({...doc.data(), id: doc.id})
 //  })
 //  setError(null)
 // }, (error) => {
 //  console.log(error)
 //  setError('Could not fetch the data')
 // })

 },[collection])
 return {documents, error}
}

export default useCollection