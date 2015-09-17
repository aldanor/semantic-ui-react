import React from 'react';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .bool('hidden')
    .bool('floating')
    .oneOf('size', sizes)
        .inline()
    .oneOf('color', colors)
        .inline()
    .bool('inverted')
    .bool('icon')
    .bool('circular')
    .bool('tag')
    .bool('horizontal')
    .oneOf('ribbon', ['right'])
        .optional()
        .postfix()
    .oneOf('pointing', ['bottom', 'left', 'right'])
        .optional()
        .alias({below: 'bottom', above: true})
        .postfix()
    .oneOf('corner', ['left', 'right'])
        .postfix()
    .oneOf('attached', ['top', 'bottom', 'top right', 'top left', 'bottom right', 'bottom left'])
        .postfix()
    .bool('basic')
class Label extends React.Component {
    render() {
        let element = (this.props.onClick || this.props.href) ? 'a' : 'div';
        return this.renderElement('ui', 'label', element, this.props.children);
    }
}

export default Label;
