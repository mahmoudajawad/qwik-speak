import { getValue, handleParams } from '../library/core';

describe('core', () => {
  test('getValue', () => {
    let value = getValue('KEY1', { KEY1: 'key1', KEY2: 'key2' });
    expect(value).toBe('key1');
    value = getValue('SUBKEY1.AA', { KEY1: 'key1', SUBKEY1: { AA: 'aa' } });
    expect(value).toBe('aa');
    value = getValue('SUBKEY1', { KEY1: 'key1', SUBKEY1: { AA: 'aa' } });
    expect(value).toBeUndefined();
    value = getValue('SUBKEY1.BB', { KEY1: 'key1', SUBKEY1: { AA: 'aa' } });
    expect(value).toBeUndefined();
  });
  test('handleParams', () => {
    let value = handleParams('Test {{param}}', { param: 'params' });
    expect(value).toBe('Test params');
    value = handleParams('Test {{ number }} {{param}}', { number: 2, param: 'params' });
    expect(value).toBe('Test 2 params');
  });
});
