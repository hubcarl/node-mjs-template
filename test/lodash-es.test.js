import assert from 'node:assert';
import { describe, test } from 'node:test';
import { isEmpty } from 'lodash-es';

/* node:coverage disable */
/* node:coverage enable */
/* node:coverage ignore next */
/* node:coverage ignore next 3 */

describe('test lodash-es', () => {
  test('should lodash-es work', () => {
    assert.equal(isEmpty(''), true);
    assert.equal(isEmpty(undefined), true);
    assert.equal(isEmpty(null), true);
  });
});