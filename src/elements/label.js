import React from 'react';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .bool('basic')
    .oneOf('size', sizes).compact()
    .oneOf('color', colors).compact()
    .bool('inverted')
    .bool('icon')
    .bool('href')
    .bool('circular')
    .bool('tag')
    .bool('horizontal')
    .bool('floating')
    .oneOf('ribbon', ['right']).optional().postfix()
    .oneOf('pointing', ['below', 'left', 'right']).optional()
    .oneOf('corner', ['left', 'right']).postfix()
    .oneOf('attached', ['top', 'bottom', 'top right', 'top left',
                        'bottom right', 'bottom left']).postfix()
    .func('onClick')
    .string('className')
class Label extends React.Component {
    render() {
        return <div className={this.classNames('ui', 'label')}>{this.props.children}</div>;
    }
}

export default Label;
