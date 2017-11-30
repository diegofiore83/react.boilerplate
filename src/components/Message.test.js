import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Message from './Message';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Message text="" />, div);
});

test('should render a text div into the message', () => {
    const renderedItem = shallow(<Message text="Hello World" />);

    expect(renderedItem.find('#message_text').text()).toBe("Hello World");
});