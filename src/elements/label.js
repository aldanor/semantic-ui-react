import React from 'react';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .oneOf('size', sizes)
        .compact()
    .oneOf('color', colors)
        .compact()
    .bool('inverted')
    .bool('icon')
    .bool('href')
    .bool('circular')
    .bool('tag')
    .bool('horizontal')
    .bool('floating')
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
    .func('onClick')
    .string('className')
    .bool('basic')
class Label extends React.Component {
    render() {
        return <div className={this.classNames('ui', 'label')}>{this.props.children}</div>;
    }
}

export default Label;
