import React from 'react';
import classNames from 'classnames';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .bool('icon')
    .bool('href')
    .bool('circular')
    .bool('tag')
    .bool('horizontal')
    .bool('floating')
    .bool('ribbon')
    .oneOf('pointing', ['above', 'below', 'left', 'right']).default('above')
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
