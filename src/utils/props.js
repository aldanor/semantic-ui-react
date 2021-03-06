import React from 'react';
import _ from 'underscore';
import classNames from 'classnames';

function defineClassNames(props) {
    return (component, prefix, suffix) => {
        let classes = [];
        if (prefix) {
            classes.push(prefix);
        }
        for (const prop of props) {
            let value = component.props[prop.name];
            if (prop.alias && prop.alias.hasOwnProperty(value)) {
                value = prop.alias[value];
            }
            if (value) {
                if (prop.type === 'bool') {
                    classes.push({[prop.name]: value});
                } else if (prop.type === 'string') {
                    classes.push(value);
                } else if (prop.type === 'oneOf') {
                    if (!prop.postfix) {
                        classes.push(
                            {[prop.name]: !prop.inline},
                            {[value]: value !== true && (!prop.default || value !== prop.default)}
                        );
                    } else {
                        classes.push(
                            {[value]: value !== true && (!prop.default || value !== prop.default)},
                            {[prop.name]: !prop.inline}
                        );
                    }
                }
            }
        }
        if (suffix) {
            classes.push(suffix);
        }
        if (component.props.className) {
            classes.push(component.props.className);
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
                propTypes = React.PropTypes.oneOfType([
                    React.PropTypes.bool,
                    propTypes
                ]);
            }
            if (prop.alias) {
                propTypes = React.PropTypes.oneOfType([
                    React.PropTypes.oneOf(_.keys(prop.alias)),
                    propTypes
                ]);
            }
            if (prop.required) {
                propTypes = propTypes.isRequired;
            }
            component.propTypes[prop.name] = propTypes;

        }
        if (component.prototype) {
            let method = defineClassNames(props);
            component.prototype.classNames = function(prefix, suffix) {
                return method(this, prefix, suffix);
            };
            const propNames = props.map(p => p.name);
            component.prototype.renderElement = function(prefix, suffix, element, children) {
                let elementProps = _.omit(this.props, propNames);
                elementProps.className = this.classNames(prefix, suffix);
                return React.createElement(element, elementProps, children);
            };
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
    for (const key of ['default', 'alias']) {
        wrapper[key] = modifyLast(key);
    }
    for (const key of ['inline', 'optional', 'postfix', 'required']) {
        wrapper[key] = modifyLast(key, true);
    }

    return wrapper;
}

export default propWrapper([]);
