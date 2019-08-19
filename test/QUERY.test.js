import QUERY from '../src/services/QUERY.js';

const test = QUnit.test;

QUnit.module('Query String Parser');

test('converts query string to object', assert => {
    const query = 'search=eevee&page=1';
    const expected = {
        search: 'eevee',
        page: '1'
    };
    const queryProps = QUERY.parse(query);

    assert.deepEqual(queryProps, expected);
});

test('converts object to query string', assert => {
    const queryProps = {
        search: 'eevee',
        page: '1'
    };
    const expected = 'search=eevee&page=1';
    const query = QUERY.stringify(queryProps);

    assert.deepEqual(query, expected);
});