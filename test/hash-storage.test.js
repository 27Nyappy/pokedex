import hashStorage from '../src/services/hash-storage.js';

const test = QUnit.test;

QUnit.module('Hash Storage');

test('reads window location hash as object', assert => {
    window.location.hash = 'search=eevee&page=1';
    const expected = {
        search: 'eevee',
        page: '1'
    };

    const result = hashStorage.get();

    assert.deepEqual(result, expected);
});

test('sets window location with new props', assert => {
    window.location.hash = '';
    const queryProps = {
        search: 'eevee',
        page: '1'
    };
    const expected = 'search=eevee&page=1';

    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    assert.equal(result, expected);
});

test('only sets new props on location', assert => {
    window.location.hash = 'search=eevee&page=1';
    const queryProps = {
        page: '2'
    };
    const expected = 'search=eevee&page=2';

    hashStorage.set(queryProps);
    const result = window.location.hash.slice(1);

    assert.equal(result, expected);
});

test('removes key from storage', assert => {
    window.location.hash = 'search=eevee&page=1';
    const key = 'page';
    const expected = 'search=eevee';

    hashStorage.remove(key);
    const result = window.location.hash.slice(1);

    assert.equal(result, expected);
});