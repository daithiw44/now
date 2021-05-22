import React from 'react';
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import { findElByTestAtrr } from './../../../testutils';
import { Messages } from './messages';

describe ('Messages Component', () => {
  let wrapper;
  // const mockSelectors = (storeValues) => {
  // const store = configureMockStore()({
  //   messages : {
  //     loading:true,
  //     error:'',
  //     messages:[{
  //       id:"cd445e6d-e514-424f-ba8f-16ec842002c6",
  //       userId:"fe27b760-a915-475c-80bb-7cdf14cc6ef3",
  //       message:"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
  //       timestamp:"2017-02-09T04:27:38Z"
  //     }]
  //   }
  // });

  // jest
  //   .spyOn(Redux, 'useSelector')
  //   .mockImplementation(state => state.dependencies[0](mockStore.getState()));
// };
  //
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
