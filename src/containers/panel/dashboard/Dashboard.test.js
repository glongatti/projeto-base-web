import React from 'react';
import Dashboard from './Dashboard';
import { shallow } from 'enzyme';

test(
  'Testing test',
  () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.instance().testExample()).toBe('tested');
  },
);
