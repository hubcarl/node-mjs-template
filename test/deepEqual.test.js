import assert from 'node:assert';
import { describe, test } from 'node:test';

import { deepEqual } from '../src/deepEqual.js';


describe('test deepEqual', () => {
  test('should deepEqual work', () => {
    assert.equal(deepEqual({ a: 1 }, { a: 1 }), true);
    assert.equal(deepEqual({ a: 1 }, { a: 1, b: 1 }), false);
  });
});
