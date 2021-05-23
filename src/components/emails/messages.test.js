import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { findElByTestAtrr } from './../../../testutils';
import { Messages } from './messages';

describe ('Messages Component', () => {
  let wrapper;
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
    messages : {
      loading:false,
      error:'',
      messages:[{
        id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
        userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
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
        }]
    }
  });

  beforeEach(() => {
    wrapper =mount(
      <Provider store={store}>
      <Messages />
      </Provider>
    );
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should renders without error', () => {
    const component = findElByTestAtrr(wrapper, 'messageList');
    expect(component.children.length).toEqual(1);
  });

})
