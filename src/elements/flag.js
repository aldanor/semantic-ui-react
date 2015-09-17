import React from 'react';
import props from '../utils/props';

@props
    .string('country')
        .required()
class Flag extends React.Component {
    render() {
        return this.renderElement(false, 'flag', 'i');
    }
}

export default Flag;
