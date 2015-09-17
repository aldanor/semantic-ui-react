import React from 'react';
import props from '../utils/props';

@props
    .bool('hidden')
    .bool('clearing')
    .bool('vertical')
    .bool('horizontal')
    .bool('inverted')
    .bool('fitted')
    .bool('section')
class Divider extends React.Component {
    render() {
        return this.renderElement('ui', 'divider', 'div', this.props.children);
    }
}

export default Divider;
