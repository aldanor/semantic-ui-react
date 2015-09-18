import { Icon } from '../../src/elements';
import { expect, render } from '../helpers';
import { sizes, colors } from '../../src/constants';

expect.icon = (...args) => expect(render(Icon, ...args));

describe('Icon', () => {
    it('default', () => {
        expect.icon({name: 'users'})
            .to.have.type('i')
            .and.have.class('users icon')
            .and.have.props({})
            .and.not.have.children();
    });

    it('className', () => {
        expect.icon({name: 'users', className: 'foo bar'})
            .to.have.class('users icon foo bar');
    });


    it('props', () => {
        expect.icon({foo: 'bar', name: 'users'})
            .to.have.class('users icon')
            .and.have.props({foo: 'bar'});
    });

    it('children', () => {
        expect.icon({name: 'users'}, 'foo')
            .to.not.have.children();
    });

    it('size', () => {
        for (const size of sizes) {
            expect.icon({name: 'users', size})
                .to.have.class(`${size} users icon`);
        }
    });

    it('color', () => {
        for (const color of colors) {
            expect.icon({name: 'users', color})
                .to.have.class(`${color} users icon`);
        }
    });

    it('.disabled', () => {
        expect.icon({name: 'users', disabled: true})
            .to.have.class('disabled users icon');
    });

    it('.loading', () => {
        expect.icon({name: 'users', loading: true})
            .to.have.class('loading users icon');
    });

    it('.fitted', () => {
        expect.icon({name: 'users', fitted: true})
            .to.have.class('fitted users icon');
    });

    it('.link', () => {
        expect.icon({name: 'users', link: true})
            .to.have.class('link users icon');
    });

    it('.flipped', () => {
        expect.icon({name: 'users', flipped: true})
            .to.have.class('flipped users icon');
    });

    it('.rotated', () => {
        expect.icon({name: 'users', rotated: true})
            .to.have.class('rotated users icon');
    });

    it('.circular', () => {
        expect.icon({name: 'users', circular: true})
            .to.have.class('circular users icon');
    });

    it('.bordered', () => {
        expect.icon({name: 'users', bordered: true})
            .to.have.class('bordered users icon');
    });

    it('.inverted', () => {
        expect.icon({name: 'users', inverted: true})
            .to.have.class('inverted users icon');
    });
});
