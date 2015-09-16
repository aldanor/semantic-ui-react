import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';

function defineClassNames(component, props) {
    component.prototype.classNames = function(base) {
        let classes = base ? [base] : [];
        for (const prop of props) {
            const value = this.props[prop.name];
            if (value) {
                if (prop.type === 'bool') {
                    classes.push({[prop.name]: value});
                } else if (prop.type === 'string') {
                    classes.push(value);
                } else if (prop.type === 'oneOf') {
                    classes.push({
                        [prop.name]: !prop.compact,
                        [value]: value !== true && (!prop.default || value !== prop.default)
                    });
                }
            }
        }
        return classNames(classes);
    };
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
            if (prop.optional) {
                propTypes = React.PropTypes.oneOfType([React.PropTypes.bool, propTypes]);
            }
            component.propTypes[prop.name] = propTypes;

        }
        if (component.prototype) {
            defineClassNames(component, props);
        }
        return component;
    }

    function addProp(type) {
        return (name, ...args) => {
            let prop = {type: type, name: name};
            if (args.length) {
                prop.args = args;
            }
            return propWrapper(wrapper.props.concat(prop));
        };
    }

    function modifyLast(key, value) {
        return arg => {
            let modified = _.clone(wrapper.props);
            modified[wrapper.props.length - 1][key] = value || arg;
            return propWrapper(modified);
        };
    }

    wrapper.props = props || [];
    for (const type of ['bool', 'string', 'oneOf', 'func']) {
        wrapper[type] = addProp(type);
    }
    for (const key of ['default']) {
        wrapper[key] = modifyLast(key);
    }
    for (const key of ['compact', 'optional']) {
        wrapper[key] = modifyLast(key, true);
    }

    return wrapper;
}

export default propWrapper([]);
