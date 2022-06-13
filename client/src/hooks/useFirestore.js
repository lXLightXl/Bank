import { useState, useReducer, useEffect } from 'react'
import {projectFirestore, timestamp} from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios'

let initialState = {
 document: null,
 isPending: false,
 error: null,
 success: null,
}

const firestoreReducer = (state, action) => {
 switch(action.type){
  case 'IS_PENDING':
   return {isPending: true, document: null, success: false, error: null}
  case 'ADDED_DOCUMENT':
   return {isPending: false, document: action.payload, success: true, error: null}
  case 'ERROR':
  return {isPending: false, document: null, success: false, error: action.payload}
  case 'REDEEM_CODE':
  return {isPending: false, document: action.payload, success: false, error: action.payload}
  default:
   return state
 }
}

export const useFirestore = async (collection, username) => {
 const [response, dispatch] = useReducer(firestoreReducer, initialState);
 const [isCancelled, setIsCancelled] = useState(false)
 const { user } = useAuthContext();

 const dispatchIfNotCancelled = (action) => {
   if(!isCancelled){
    dispatch(action)
   }
 }

 useEffect(() => {
  return () => setIsCancelled(true)
 }, [])

 return {response}
}