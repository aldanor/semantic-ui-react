import React from 'react';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .bool('icon')
    .bool('href')
    .bool('circular')
    .bool('tag')
    .bool('horizontal')
    .bool('floating')
    .oneOf('ribbon', ['right']).optional()
    .oneOf('pointing', ['below', 'left', 'right']).optional()
    .oneOf('corner', ['left', 'right'])
    .oneOf('attached', ['top', 'bottom', 'left', 'right'])
    .oneOf('size', sizes).compact()
    .oneOf('color', colors).compact()
    .func('onClick')
    .string('className')
class Label extends React.Component {
    render() {
        return <div className={this.classNames('ui label')}>{this.props.children}</div>;
    }
}

export default Label;
