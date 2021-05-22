import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMemberData } from '../../store/reducers/messages';
export const Messages = () => {

  const loading = useSelector(state => state.messages.loading)
  const error = useSelector(state => state.messages.error)
  const messages = useSelector(state => state.messages.messages)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMemberData())
  }, [dispatch])
  return loading ? 
    (
    <h2> Loading  </h2>
    ): error ? 
    (
      <h2> Error Loading </h2>
     ):
    (
   <ul data-test="messageList"> 
     {
       messages.map((msg, index)=> ( 
         <li key={msg.id}>
           {msg.message}
           </li>
       ))
      }
   </ul>
 )
}
