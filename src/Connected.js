import React from 'react'
import { putData } from './actions'
import { useDispatch } from 'react-redux'



function Connected() {

   const dispatch = useDispatch()

   const onClickHandler = () => dispatch(putData({}))

   return (
      <div>
         <button onClick={() => onClickHandler()}>Click on me</button>
      </div>
   )
}

export default Connected
