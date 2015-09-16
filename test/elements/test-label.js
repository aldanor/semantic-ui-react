import Label from '../../src/elements/label';
import { sizes, colors } from '../../src/constants';
import { expect, render } from '../helpers';

expect.label = (...args) => expect(render(Label, ...args));

describe('Label', () => {
    it('default', () => {
        expect.label().to.have.type('div');
        expect.label().to.have.class('ui label');
        expect.label().to.have.children();
    });

    it('className', () => {
        expect.label({color: 'red', className: 'foo bar'}).to.have.class('foo bar ui red label');
    });

    it('content', () => {
        expect.label('foo').to.have.children('foo');
        expect.label(['foo', 'bar']).to.have.children(['foo', 'bar']);
    });

    it('basic', () => {
        expect.label({basic: true}).to.have.class('ui basic label');
        expect.label({basic: true, color: 'red'}).to.have.class('ui red basic label');
    });

    it('inverted', () => {
        expect.label({inverted: true}).to.have.class('ui inverted label');
        expect.label({inverted: true, color: 'red'}).to.have.class('ui red inverted label');
    });

    it('tag', () => {
        expect.label({tag: true}).to.have.class('ui tag label');
        expect.label({tag: true, color: 'red'}).to.have.class('ui red tag label');
    });

    it('ribbon', () => {
        expect.label({ribbon: 'right'}).to.have.class('ui right ribbon label');
        expect.label({ribbon: true}).to.have.class('ui ribbon label');
        expect.label({ribbon: false}).to.have.class('ui label');
    });

    it('horizontal', () => {
        expect.label({horizontal: true}).to.have.class('ui horizontal label');
        expect.label({horizontal: true, color: 'red'}).to.have.class('ui red horizontal label');
    });

    it('circular', () => {
        expect.label({circular: true}).to.have.class('ui circular label');
        expect.label({circular: true, color: 'red'}).to.have.class('ui red circular label');
    });

    it('floating', () => {
        expect.label({floating: true}).to.have.class('ui floating label');
        expect.label({floating: true, color: 'red'}).to.have.class('ui floating red label');
    });

    it('corner', () => {
        expect.label({corner: 'right'}).to.have.class('ui right corner label');
        expect.label({corner: 'left'}).to.have.class('ui left corner label');
    });

    it('pointing', () => {
        expect.label({pointing: true}).to.have.class('ui pointing label');
        expect.label({pointing: 'above'}).to.have.class('ui pointing label');
        expect.label({pointing: false}).to.have.class('ui label');
        expect.label({pointing: 'bottom'}).to.have.class('ui bottom pointing label');
        expect.label({pointing: 'below'}).to.have.class('ui bottom pointing label');
        expect.label({pointing: 'left'}).to.have.class('ui left pointing label');
        expect.label({pointing: 'right'}).to.have.class('ui right pointing label');
    });

    it('attached', () => {
        expect.label({attached: 'top'}).to.have.class('ui top attached label');
        expect.label({attached: 'bottom'}).to.have.class('ui bottom attached label');
        expect.label({attached: 'top left'}).to.have.class('ui top left attached label');
        expect.label({attached: 'top right'}).to.have.class('ui top right attached label');
        expect.label({attached: 'bottom left'}).to.have.class('ui bottom left attached label');
        expect.label({attached: 'bottom right'}).to.have.class('ui bottom right attached label');
    });

    it('size', () => {
        for (const size of sizes) {
            expect.label({size}).to.have.class(`ui ${size} label`);
        }
    });

    it('color', () => {
        for (const color of colors) {
            expect.label({color}).to.have.class(`ui ${color} label`);
        }
    });

    it('href', () => {
        expect.label({href: '#'}).to.have.type('a');
    });

    it('onClick', () => {
        expect.label({onClick: () => []}).to.have.type('a');
    });
});
