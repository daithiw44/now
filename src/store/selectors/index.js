import { createSelector } from 'reselect';
import { formatDate, dateSort } from '../../utils'

export const getFormattedMessages = emails => emails.map((msg) => {
  if(msg.timestamp !== undefined) {
    msg.dtFormat = formatDate(msg.timestamp)
  }
  return msg;
}).sort(dateSort);

// Create Selector Return Function
export const createSelectorFunction = (emailsMsg, members) => {
  const items = emailsMsg.map(item => { 
    let  {email, avatar, firstName, lastName} = members.find(m => m.id === item.userId) || {};
    // Handle null avatar with default image
    if(avatar === null) avatar = 'https://media.gettyimages.com/photos/republican-presidential-candidate-donald-trump-speaks-during-a-rally-picture-id488226322?s=612x612'; 
    return { ...item, email, avatar, firstName, lastName }
  })
  return items;
};

export const emailsSelector = (state) => getFormattedMessages(state.messages.messages);
export const usersSelector = (state) => state.messages.users;
export const usersEmailSelector = () => createSelector(emailsSelector , usersSelector, createSelectorFunction 
);
