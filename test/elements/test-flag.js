import { Flag } from '../../src/elements';
import { expect, render } from '../helpers';

expect.flag = (...args) => expect(render(Flag, ...args));

describe('Flag', () => {
    it('default', () => {
        expect.flag({country: 'ie'})
            .to.have.type('i')
            .and.have.class('ie flag')
            .and.have.props({})
            .and.not.have.children();
    });

    it('className', () => {
        expect.flag({country: 'ie', className: 'foo bar'})
            .to.have.class('ie flag foo bar');
    });

    it('props', () => {
        expect.flag({foo: 'bar', country: 'ie'})
            .to.have.class('ie flag')
            .and.have.props({foo: 'bar'});
    });

    it('children', () => {
        expect.flag({country: 'ie'}, 'foo')
            .to.not.have.children();
    });
});
