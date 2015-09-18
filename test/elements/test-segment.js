import { Segment } from '../../src/elements';
import { expect, render } from '../helpers';
import { colors } from '../../src/constants';

expect.segment = (...args) => expect(render(Segment, ...args));

describe('Segment', () => {
    it('default', () => {
        expect.segment()
            .to.have.type('div')
            .and.have.class('ui segment')
            .and.have.props({})
            .and.not.have.children();
    });

    it('className', () => {
        expect.segment({color: 'red', className: 'foo bar'})
            .to.have.class('ui red segment foo bar');
    });

    it('props', () => {
        expect.segment({foo: 'bar', color: 'red'})
            .to.have.class('ui red segment')
            .and.have.props({foo: 'bar'});
    });

    it('children', () => {
        expect.segment('foo')
            .to.have.children('foo');
        expect.segment(['foo', 'bar'])
            .to.have.children(['foo', 'bar']);
    });

    it('color', () => {
        for (const color of colors) {
            expect.segment({color})
                .to.have.class(`ui ${color} segment`);
        }
    });

    it('.clearing', () => {
        expect.segment({clearing: true})
            .to.have.class('ui clearing segment');
    });

    it('.secondary', () => {
        expect.segment({secondary: true})
            .to.have.class('ui secondary segment');
    });

    it('.tertiary', () => {
        expect.segment({tertiary: true})
            .to.have.class('ui tertiary segment');
    });

    it('.raised', () => {
        expect.segment({raised: true})
            .to.have.class('ui raised segment');
    });

    it('.piled', () => {
        expect.segment({piled: true})
            .to.have.class('ui piled segment');
    });

    it('.vertical', () => {
        expect.segment({vertical: true})
            .to.have.class('ui vertical segment');
    });

    it('.disabled', () => {
        expect.segment({disabled: true})
            .to.have.class('ui disabled segment');
    });

    it('.loading', () => {
        expect.segment({loading: true})
            .to.have.class('ui loading segment');
    });

    it('.inverted', () => {
        expect.segment({inverted: true})
            .to.have.class('ui inverted segment');
    });

    it('.circular', () => {
        expect.segment({circular: true})
            .to.have.class('ui circular segment');
    });

    it('.padded', () => {
        expect.segment({padded: true})
            .to.have.class('ui padded segment');
    });

    it('.compact', () => {
        expect.segment({compact: true})
            .to.have.class('ui compact segment');
    });

    it('.basic', () => {
        expect.segment({basic: true})
            .to.have.class('ui basic segment');
    });

    it('.floated', () => {
        expect.segment({floated: 'left'})
            .to.have.class('ui left floated segment');
        expect.segment({floated: 'right'})
            .to.have.class('ui right floated segment');
    });

    it('.aligned', () => {
        expect.segment({aligned: 'left'})
            .to.have.class('ui left aligned segment');
        expect.segment({aligned: 'right'})
            .to.have.class('ui right aligned segment');
    });

    it('.stacked', () => {
        expect.segment({stacked: 'tall'})
            .to.have.class('ui tall stacked segment');
        expect.segment({stacked: true})
            .to.have.class('ui stacked segment');
        expect.segment({stacked: false})
            .to.have.class('ui segment');
    });

    it('.attached', () => {
        expect.segment({attached: 'top'})
            .to.have.class('ui top attached segment');
        expect.segment({attached: 'bottom'})
            .to.have.class('ui bottom attached segment');
        expect.segment({attached: true})
            .to.have.class('ui attached segment');
        expect.segment({attached: false})
            .to.have.class('ui segment');
    });
});
