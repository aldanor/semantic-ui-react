import { expect, React } from '../helpers';
import props from '../../src/utils/props';

describe('props', () => {
    it('empty', () => {
        expect(props({foo: 1})).to.deep.equal({foo: 1});
    });

    it('bool', () => {
        expect(props.bool('foo').props).to.deep.equal([
            {type: 'bool', name: 'foo'}
        ]);
        expect(props.bool('foo')({}).propTypes).to.deep.equal({
            foo: React.PropTypes.bool
        });
    });

    it('string', () => {
        expect(props.string('foo').props).to.deep.equal([
            {type: 'string', name: 'foo'}
        ]);
        expect(props.string('foo')({}).propTypes).to.deep.equal({
            foo: React.PropTypes.string
        });
    });

    it('func', () => {
        expect(props.func('foo').props).to.deep.equal([
            {type: 'func', name: 'foo'}
        ]);
        expect(props.func('foo')({}).propTypes).to.deep.equal({
            foo: React.PropTypes.func
        });
    });

    it('chained', () => {
        expect(props.bool('foo').string('bar').props).to.deep.equal([
            {type: 'bool', name: 'foo'},
            {type: 'string', name: 'bar'}
        ]);
        expect(props.bool('foo').string('bar')({}).propTypes).to.deep.equal({
            foo: React.PropTypes.bool,
            bar: React.PropTypes.string
        });
    });

    it('oneOf', () => {
        expect(props.oneOf('foo', ['bar', 'baz']).props).to.deep.equal([
            {type: 'oneOf', name: 'foo', 'args': [['bar', 'baz']]}
        ]);
    });

    it('default', () => {
        expect(props.bool('foo').default('bar').props).to.deep.equal([
            {type: 'bool', name: 'foo', default: 'bar'}
        ]);
    });

    it('optional', () => {
        expect(props.oneOf('foo', ['bar', 'baz']).optional().props).to.deep.equal([
            {type: 'oneOf', name: 'foo', args: [['bar', 'baz']], optional: true}
        ]);
    });

    it('compact', () => {
        expect(props.bool('foo').compact().props).to.deep.equal([
            {type: 'bool', name: 'foo', compact: true}
        ]);
    });
});
