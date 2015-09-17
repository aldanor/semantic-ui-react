import React from 'react';
import props from '../utils/props';
import { sizes, colors } from '../constants';

@props
    .bool('disabled')
    .bool('loading')
    .bool('fitted')
    .oneOf('size', sizes)
        .inline()
    .oneOf('color', colors)
        .inline()
    .bool('link')
    .bool('flipped')
    .bool('rotated')
    .bool('circular')
    .bool('bordered')
    .bool('inverted')
    .string('name')
        .required()
class Icon extends React.Component {
    render() {
        return this.renderElement(false, 'icon', 'i');
    }
}

export default Icon;
