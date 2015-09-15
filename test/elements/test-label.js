import Label from '../../src/elements/label';
import { sizes, colors } from '../../src/constants';
import { expect, render } from '../helpers';

expect.Label = (...args) => expect(render(Label, ...args));

describe('Label', () => {
    it('default', () => {
        expect.Label().to.have.type('div');
        expect.Label().to.have.class('ui label');
        expect.Label().to.have.children(undefined);
    });

    it('className', () => {
        expect.Label({className: 'foo bar'}).to.have.class('ui label foo bar');
    });

    it('content', () => {
        expect.Label('foo').to.have.children('foo');
        expect.Label(['foo', 'bar']).to.have.children(['foo', 'bar']);
    });

    it('tag', () => {
        expect.Label({tag: true}).to.have.class('ui label tag');
    });

    it('ribbon', () => {
        expect.Label({ribbon: true}).to.have.class('ui label ribbon');
    });

    it('horizontal', () => {
        expect.Label({horizontal: true}).to.have.class('ui label horizontal');
    });

    it('circular', () => {
        expect.Label({circular: true}).to.have.class('ui label circular');
    });

    it('floating', () => {
        expect.Label({floating: true}).to.have.class('ui label floating');
    });

    it('corner', () => {
        expect.Label({corner: 'right'}).to.have.class('ui label right corner');
        expect.Label({corner: 'left'}).to.have.class('ui label left corner');
    });

    it('pointing', () => {
        expect.Label({pointing: 'above'}).to.have.class('ui label pointing');
        expect.Label({pointing: 'below'}).to.have.class('ui label pointing below');
        expect.Label({pointing: 'left'}).to.have.class('ui label pointing left');
        expect.Label({pointing: 'right'}).to.have.class('ui label pointing right');
    });

    it('attached', () => {
        expect.Label({attached: 'top'}).to.have.class('ui label attached top');
        expect.Label({attached: 'bottom'}).to.have.class('ui label attached bottom');
        expect.Label({attached: 'left'}).to.have.class('ui label attached left');
        expect.Label({attached: 'right'}).to.have.class('ui label attached right');
    });

    it('size', () => {
        for (const size of sizes) {
            expect.Label({size}).to.have.class('ui label ' + size);
        }
    });

    it('color', () => {
        for (const color of colors) {
            expect.Label({color}).to.have.class('ui label ' + color);
        }
    });
});
