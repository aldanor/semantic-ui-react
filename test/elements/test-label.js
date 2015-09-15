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
        expect.label({className: 'foo bar'}).to.have.class('ui label foo bar');
    });

    it('content', () => {
        expect.label('foo').to.have.children('foo');
        expect.label(['foo', 'bar']).to.have.children(['foo', 'bar']);
    });

    it('tag', () => {
        expect.label({tag: true}).to.have.class('ui label tag');
    });

    it('ribbon', () => {
        expect.label({ribbon: true}).to.have.class('ui label ribbon');
    });

    it('horizontal', () => {
        expect.label({horizontal: true}).to.have.class('ui label horizontal');
    });

    it('circular', () => {
        expect.label({circular: true}).to.have.class('ui label circular');
    });

    it('floating', () => {
        expect.label({floating: true}).to.have.class('ui label floating');
    });

    it('corner', () => {
        expect.label({corner: 'right'}).to.have.class('ui label right corner');
        expect.label({corner: 'left'}).to.have.class('ui label left corner');
    });

    it('pointing', () => {
        expect.label({pointing: 'above'}).to.have.class('ui label pointing');
        expect.label({pointing: 'below'}).to.have.class('ui label pointing below');
        expect.label({pointing: 'left'}).to.have.class('ui label pointing left');
        expect.label({pointing: 'right'}).to.have.class('ui label pointing right');
    });

    it('attached', () => {
        expect.label({attached: 'top'}).to.have.class('ui label attached top');
        expect.label({attached: 'bottom'}).to.have.class('ui label attached bottom');
        expect.label({attached: 'left'}).to.have.class('ui label attached left');
        expect.label({attached: 'right'}).to.have.class('ui label attached right');
    });

    it('size', () => {
        for (const size of sizes) {
            expect.label({size}).to.have.class('ui label ' + size);
        }
    });

    it('color', () => {
        for (const color of colors) {
            expect.label({color}).to.have.class('ui label ' + color);
        }
    });
});
