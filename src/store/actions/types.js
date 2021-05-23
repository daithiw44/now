export const GET_MESSAGES_REQUEST = 'FETCH_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const GET_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const getMessagesRequest = () => {
  return {
    type: GET_MESSAGES_REQUEST 
  }
}

export const getMessagesSuccess = messages => {
  return {
    type: GET_MESSAGES_SUCCESS,
    payload: messages
  }
}

export const getMessagesFailure = error => {
  return {
    type: GET_MESSAGES_FAILURE,
    payload: error
  }
}
