import { getMessages, getMembers } from '../../data';
import * as Actions from '../actions/types';    

export const getMemberData = () => {
  return (dispatch) => {
    dispatch(Actions.getMessagesRequest())
    Promise.all([getMessages(), getMembers()])
      .then(response => {
        dispatch(Actions.getMessagesSuccess(response))
      })
      .catch(error => {
        dispatch(Actions.getMessagesFailure(error.message))
      })
  }
}

export const initalState = {
  loading: true,
  messages:[],
  users:[],
  error:false
}

export const messages = (state = initalState, action) => {
  switch(action.type) {
    case Actions.GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading:true,
        error:false,
        messages:[],
        users: []
      };
    case Actions.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading:false,
        error:false,
        messages: action.payload[0],
        users: action.payload[1]
      };
    case Actions.GET_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default: 
      return initalState;
  }
}
