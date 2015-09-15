import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';

function defineClassNames(component, props) {
    Object.defineProperty(component.prototype, 'classNames', {
        get() {
            let classes = [];
            for (const prop of props) {
                const value = this.props[prop.name];
                if (prop.type == 'bool') {
                    classes.push({[prop.name]: value});
                } else if (prop.type == 'string') {
                    if (value) {
                        classes.push(value);
                    }
                } else if (prop.type == 'oneOf') {
                    if (value) {
                        if (!prop.compact) {
                            classes.push(prop.name);
                        }
                        if (!prop.default || value != prop.default) {
                            classes.push(value);
                        }
                    }
                }
            }
            return classNames(classes);
        }
    });
}


function propWrapper(props) {
    function wrapper(component) {
        if (!props || !props.length) {
            return component;
        }
        if (!component.propTypes) {
            component.propTypes = {};
        }
        for (const prop of props) {
            let propTypes = React.PropTypes[prop.type];
            if (prop.args && prop.args.length) {
                propTypes = propTypes(...prop.args);
            }
            component.propTypes[prop.name] = propTypes;

        }
        if (component.prototype) {
            defineClassNames(component, props);
        }
        return component;
    }
    wrapper.props = props || [];
    for (const type of ['bool', 'string', 'oneOf', 'func']) {
        wrapper[type] = (name, ...args) => {
            let prop = {type: type, name: name};
            if (args.length) {
                prop.args = args;
            }
            return propWrapper(wrapper.props.concat(prop));
        }
    }
    let modifyLast = (key, value) => {
        let modified = _.clone(wrapper.props);
        modified[wrapper.props.length - 1][key] = value;
        return propWrapper(modified);
    };
    for (const key of ['default']) {
        wrapper[key] = value => modifyLast(key, value);
    }
    for (const key of ['compact']) {
        wrapper[key] = () => modifyLast(key, true);
    }
    return wrapper;
}

export default propWrapper([]);