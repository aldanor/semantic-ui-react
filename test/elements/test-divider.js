import Divider from '../../src/elements/divider';
import { expect, render } from '../helpers';

expect.divider = (...args) => expect(render(Divider, ...args));

describe('Divider', () => {
    it('default', () => {
        expect.divider()
            .to.have.type('div')
            .and.have.class('ui divider')
            .and.have.props({})
            .and.not.have.children();
    });

    it('className', () => {
        expect.divider({fitted: true, className: 'foo bar'})
            .to.have.class('foo bar ui fitted divider');
    });


    it('props', () => {
        expect.divider({foo: 'bar', fitted: true})
            .to.have.class('ui fitted divider')
            .and.have.props({foo: 'bar'});
    });

    it('children', () => {
        expect.divider('foo')
            .to.have.children('foo');
        expect.divider(['foo', 'bar'])
            .to.have.children(['foo', 'bar']);
    });

    it('.hidden', () => {
        expect.divider({hidden: true})
            .to.have.class('ui hidden divider');
    });

    it('.clearing', () => {
        expect.divider({clearing: true})
            .to.have.class('ui clearing divider');
    });

    it('.vertical', () => {
        expect.divider({vertical: true})
            .to.have.class('ui vertical divider');
    });

    it('.horizontal', () => {
        expect.divider({horizontal: true})
            .to.have.class('ui horizontal divider');
    });

    it('.inverted', () => {
        expect.divider({inverted: true})
            .to.have.class('ui inverted divider');
    });

    it('.fitted', () => {
        expect.divider({fitted: true})
            .to.have.class('ui fitted divider');
    });

    it('.section', () => {
        expect.divider({section: true})
            .to.have.class('ui section divider');
    });
});
