import { isSafeNumber } from '../testIndex.js';

it('test safe integers for safe use as a number', () => {
  expect(isSafeNumber(1)).toBe(true);
  expect(isSafeNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
  expect(isSafeNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
  expect(isSafeNumber(0)).toBe(true);
});

it('test unsafe integers for safe use as a number', () => {
  expect(isSafeNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  expect(isSafeNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
  expect(isSafeNumber(Number.MAX_VALUE)).toBe(false); // Number.MAX_VALUE is not a safe integer
});

it('test Infinity and NaN for safe use as a number', () => {
  expect(isSafeNumber(Number.POSITIVE_INFINITY)).toBe(false);
  expect(isSafeNumber(Number.NEGATIVE_INFINITY)).toBe(false);
  expect(isSafeNumber(NaN)).toBe(false);
});

it('test integer divided by zero for safe use as a number', () => {
    expect(isSafeNumber(1/0)).toBe(false);
  });

it('test valid numeric strings for safe use as a number when acceptStringNumbers is true', () => {
  expect(isSafeNumber('1', true)).toBe(true);
  expect(isSafeNumber('1.1', true)).toBe(true);
  expect(isSafeNumber('-1', true)).toBe(true);
  expect(isSafeNumber('0xFF', true)).toBe(true);
});

it('test invalid numeric strings for safe use as a number when acceptStringNumbers is true', () => {
  expect(isSafeNumber('34.345abchs', true)).toBe(false);
  expect(isSafeNumber('Xyz', true)).toBe(false);
});

it('test numeric strings for safe use as a number when acceptStringNumbers is false', () => {
  expect(isSafeNumber('1', false)).toBe(false);
});

it('test BigInt and BigInt literals for safe use as a number', () => {
  expect(isSafeNumber(1n)).toBe(false);
  expect(isSafeNumber(BigInt(1))).toBe(false);
});

it('test floating point string that is too large for safe use as a number', () => {
  expect(isSafeNumber("999999999999999999999999.99", true)).toBe(false);
  expect(isSafeNumber("999999999999999999999999.99", false)).toBe(false);
});

it('test Symbol for safe use as a number', () => {
  expect(isSafeNumber(Symbol("test"))).toBe(false);
});

it('test Object for safe use as a number', () => {
  expect(isSafeNumber({})).toBe(false);
  expect(isSafeNumber(new Date())).toBe(false);
});

it('test Array for safe use as a number', () => {
  expect(isSafeNumber([])).toBe(false);
  expect(isSafeNumber([1])).toBe(false);
});