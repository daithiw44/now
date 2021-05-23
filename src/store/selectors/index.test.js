import {getFormattedMessages, emailsSelector, usersSelector, usersEmailSelector, createSelectorFunction } from './';

const mockStore = () => ({
  messages: {
  error: false,
  loading:false,
  messages:[{
    id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
    userId:"e837c9f5-247f-445f-bcc3-7d434348336b",
    message:"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    timestamp:"2017-02-09T04:27:38Z"
  }],
  users:  [{
    "id": "e837c9f5-247f-445f-bcc3-7d434348336b",
    "firstName": "Martin",
    "lastName": "Bradley",
    "email": "mbradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.160"
  },{
    "id": "f837c9f5-247f-445f-bcc3-7d434348336b",
    "firstName": "Tim",
    "lastName": "Radley",
    "email": "tradley0@google.it",
    "avatar": "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
    "ip": "166.124.172.161"
  }]
  }
});

describe('Selector tests', () => {
  it('should have one message in emails Selector', () => {
    const emails = emailsSelector(mockStore());
    expect(emails.length).toEqual(1);
  })

  it('should have two members in usersSelector', () => {
    const users = usersSelector(mockStore());
    expect(users.length).toEqual(2);
  })

  it('should retrun a concat Obj from usersEmailSelector', () => {
    const email =createSelectorFunction(emailsSelector(mockStore()), usersSelector(mockStore()));
    expect(email[0].hasOwnProperty('avatar')).toBe(true);
    expect(email[0].hasOwnProperty('email')).toBe(true);
    expect(email[0].hasOwnProperty('firstName')).toBe(true);
    expect(email[0].hasOwnProperty('lastName')).toBe(true);
  })
});
