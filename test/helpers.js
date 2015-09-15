import _ from 'underscore';
import classNames from 'classnames/dedupe';
import { expect, Assertion, util } from 'chai';
import React from 'react/addons';
const { TestUtils } = React.addons;

function render(component, ...args) {
    let props = undefined, children = undefined;
    if (args.length == 1) {
        if (_.isArray(args[0]) || !_.isObject(args[0])) {
            children = args[0];
        } else {
            props = args[0];
        }
    } else if (args.length >= 2) {
        props = args[0];
        children = args[1];
    }
    if (children && children.length == 1) {
        children = children[0];
    }
    props = props || {};
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(React.createElement(component, props, children));
    return shallowRenderer.getRenderOutput();
}

Assertion.addMethod('class', function(className) {
    const classesArg = classNames(className).split(' ').sort();
    const classesObj = classNames(this._obj.props.className).split(' ').sort();

    if (!util.flag(this, 'contains')) {
        this.assert(
            _.isEqual(classesObj, classesArg),
            'expected #{this} to have class #{exp} but got #{act}',
            'expected #{this} to not have class #{act}',
            classesArg.join(' '),
            classesObj.join(' ')
        );
    } else {
        this.assert(
            _.intersection(classesObj, classesArg).length == classesArg.length,
            'expected #{this} to contain class #{exp}',
            'expected #{this} to not contain class #{exp}',
            classesArg.join(' '),
            classesObj.join(' ')
        );
    }
});

Assertion.addMethod('children', function(children) {
    this.assert(
        _.isEqual(children, this._obj.props.children),
        'expected #{this} to have children #{exp} but got #{act}',
        'expected #{this} to not have children #{exp}'
    );
});

Assertion.addMethod('type', function(type) {
    this.assert(
        this._obj.type === type,
        'expected #{this} to be of type #{exp} but got #{act}',
        'expected #{this} to not be of type #{exp}'
    );
})

export default { expect, React, TestUtils, render };
