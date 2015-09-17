import React from 'react';
import props from '../utils/props';
import { colors } from '../constants';

@props
    .bool('clearing')
    .bool('secondary')
    .bool('tertiary')
    .oneOf('floated', ['left', 'right'])
        .postfix()
    .oneOf('aligned', ['left', 'right'])
        .postfix()
    .oneOf('color', colors)
        .compact()
    .bool('raised')
    .oneOf('stacked', ['tall'])
        .optional()
        .postfix()
    .bool('piled')
    .bool('vertical')
    .bool('disabled')
    .bool('loading')
    .bool('inverted')
    .bool('circular')
    .oneOf('attached', ['top', 'bottom'])
        .optional()
        .postfix()
    .bool('padded')
    .bool('compact')
    .bool('basic')
class Segment extends React.Component {
    render() {
        return this.renderElement('ui', 'segment', 'div', this.props.children);
    }
}

export default Segment;
