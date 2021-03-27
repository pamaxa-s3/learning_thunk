import { PUT_DATA } from './actions';

const initialState = {
   data: {}
}

function reducer(state=initialState, action) {
   switch (action.type) {
      case PUT_DATA:
         return {
            ...state, data: action.payload
         }
      default:
         return state
   }
}

export default reducer
