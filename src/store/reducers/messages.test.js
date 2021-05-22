import { GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE } from '../actions/types';    
import { messages, initalState  } from './messages';

describe('Messages Reducer', () => {
    it('should return default state', () => {
      const newState = messages(undefined, {type :'TEST'});
      expect(newState).toEqual(initalState); 
    });

    it('should return a new state if valid type recieved', () => {
      const messagesData = [{
        id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
        userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
        message:"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        timestamp:"2017-02-09T04:27:38Z"
      }];

      const newState = messages(undefined, 
        { type : GET_MESSAGES_SUCCESS,payload: messages});
      expect(newState.messages).toEqual(messages); 
    });

    it('should return loading if  GET_MESSAGES_REQUEST type recieved', () => {
      const newState = messages(undefined, 
        { type : GET_MESSAGES_REQUEST});
      expect(newState.loading).toEqual(true); 
      expect(newState.messages).toEqual([]); 
    });

    it('should return error if GET_MESSAGES_FAILURE type recieved', () => {
      const newState = messages(undefined, 
        { type :GET_MESSAGES_FAILURE });
      expect(newState.loading).toEqual(false); 
      expect(newState.error).toEqual(true); 
    });

});
