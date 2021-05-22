import { getMessages } from '../../data';
import * as Actions from '../actions/types';    

export const getMemberData = () => {
  return (dispatch) => {
    dispatch(getMessagesRequest())
    getMessages()
      .then(response => {
        const messages = response
        dispatch(getMessagesSuccess(messages))
      })
      .catch(error => {
        dispatch(getMessagesFailure(error.message))
      })
  }
}

export const getMessagesRequest = () => {
  return {
    type: Actions.GET_MESSAGES_REQUEST 
  }
}

export const getMessagesSuccess = messages => {
  return {
    type: Actions.GET_MESSAGES_SUCCESS,
    payload: messages
  }
}

export const getMessagesFailure = error => {
  return {
    type: Actions.GET_MESSAGES_FAILURE,
    payload: error
  }
}

export const initalState = {
  loading: true,
  messages:[],
  error:false
}

export const messages = (state = initalState, action) => {
  switch(action.type) {
    case Actions.GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading:true,
        error:false,
        messages:[]
      };
    case Actions.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading:false,
        error:false,
        messages: action.payload
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
