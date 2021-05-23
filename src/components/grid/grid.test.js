import React from 'react';
import { shallow } from 'enzyme';
import { withStyles } from '@material-ui/core/styles';
import Grid from './grid';
describe('SharedButton Component', () => {

  let wrapper;
  beforeEach(() => {
    const props = {
      emails:[{
        avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
        dtFormat: "26 February 2016, 10:05",
        email: "awilliams8@indiegogo.com",
        firstName: "Aaron",
        id: "555f4e1b-90a6-4079-850d-54001f29ce44",
        lastName: "Williams",
        message: "Quisque ut erat. Curabitur gravida nisi at nibh.",
        timestamp: "2016-02-26T10:05:17Z",
        userId: "c980934a-f54e-459e-8137-0ec3654cdafb"
      }]
    };
    wrapper = shallow(<Grid {...props} />);
  });

  it('renders', () => {
    expect(wrapper).not.toBeNull();
    expect(wrapper).toMatchSnapshot();
  });
})
