import { enhancedTypeOf } from '../src/index.js';

// ----- primitive types -----

test('get enhanced type of integer number', () => {
    expect(enhancedTypeOf(1)).toBe('number');
});

test('get enhanced type of float number', () => {
    expect(enhancedTypeOf(99.99)).toBe('number');
});

test('get enhanced type of bigint', () => {
    expect(enhancedTypeOf(BigInt(123))).toBe('bigint');
});

test('get enhanced type of string', () => {
    expect(enhancedTypeOf('123')).toBe('string');
});

test('get enhanced type of boolean', () => {
    expect(enhancedTypeOf(true)).toBe('boolean');
});

test('get enhanced type of null', () => {
    expect(enhancedTypeOf(null)).toBe('null');
});

test('get enhanced type of undefined', () => {
    expect(enhancedTypeOf(undefined)).toBe('undefined');
});

// ----- non-primitive types -----

test('get enhanced type of symbol', () => {
    expect(enhancedTypeOf(Symbol('hello'))).toBe('symbol');
});

test('get enhanced type of regex', () => {
    expect(enhancedTypeOf(/hello/)).toBe('RegExp');
});

test('get enhanced type of date', () => {
    expect(enhancedTypeOf(new Date())).toBe('Date');
});

test('get enhanced type of error', () => {
    expect(enhancedTypeOf(new Error())).toBe('Error');
});

test('get enhanced type of url', () => {
    expect(enhancedTypeOf(new URL('https://www.google.com'))).toBe('URL');
});

test('get enhanced type of urlsearchparams', () => {
    expect(enhancedTypeOf(new URLSearchParams())).toBe('URLSearchParams');
});

test('get enhanced type of set', () => {
    expect(enhancedTypeOf(new Set())).toBe('Set');
});

test('get enhanced type of map', () => {
    expect(enhancedTypeOf(new Map())).toBe('Map');
});

test('get enhanced type of weakset', () => {
    expect(enhancedTypeOf(new WeakSet())).toBe('WeakSet');
});

test('get enhanced type of weakmap', () => {
    expect(enhancedTypeOf(new WeakMap())).toBe('WeakMap');
});

test('get enhanced type of dataview', () => {
    const buffer = new ArrayBuffer(16);
    expect(enhancedTypeOf(new DataView(buffer))).toBe('DataView');
});

test('get enhanced type of arraybuffer', () => {
    expect(enhancedTypeOf(new ArrayBuffer())).toBe('ArrayBuffer');
});

test('get enhanced type of sharedarraybuffer', () => {
    expect(enhancedTypeOf(new SharedArrayBuffer(16))).toBe('SharedArrayBuffer');
});

// ------ array types -----

test('get enhanced type of Array', () => {
    expect(enhancedTypeOf([])).toBe('Array');
});

test('get enhanced type of uint8Array', () => {
    expect(enhancedTypeOf(new Uint8Array())).toBe('Uint8Array');
});

test('get enhanced type of int8Array', () => {    
    expect(enhancedTypeOf(new Int8Array())).toBe('Int8Array');
});

test('get enhanced type of int32Array', () => {
    expect(enhancedTypeOf(new Int32Array())).toBe('Int32Array');
});

test('get enhanced type of float32Array', () => {
    expect(enhancedTypeOf(new Float32Array())).toBe('Float32Array');
});
  
test('get enhanced type of float64Array', () => {
    expect(enhancedTypeOf(new Float64Array())).toBe('Float64Array');
});
  
test('get enhanced type of uint8clampedArray', () => {
    expect(enhancedTypeOf(new Uint8ClampedArray())).toBe('Uint8ClampedArray');
});
  
test('get enhanced type of bigint64Array', () => {
    expect(enhancedTypeOf(new BigInt64Array())).toBe('BigInt64Array');
});
  
test('get enhanced type of biguint64Array', () => {
    expect(enhancedTypeOf(new BigUint64Array())).toBe('BigUint64Array');
});

test('get enhanced type of array iterator', () => {
    expect(enhancedTypeOf([][Symbol.iterator]())).toBe('Array Iterator');
});

// ----- function types -----

test('get enhanced type of function', () => {
    expect(enhancedTypeOf(function() {})).toBe('function');
});

test('get enhanced type of function', () => {
    let myFunc = function() {};
    expect(enhancedTypeOf(new myFunc())).toBe('myFunc');
});

test('get enhanced type of promise', () => {
    expect(enhancedTypeOf(new Promise(() => {}))).toBe('Promise');
});

test('get enhanced type of generatorfunction', () => {
    let theGenerator = function*() {};  
    expect(enhancedTypeOf( theGenerator )).toBe('GeneratorFunction');
});

test('get enhanced type of asyncfunction', () => {
    let myAsyncFunction = async function() {};
    expect(enhancedTypeOf( myAsyncFunction )).toBe('AsyncFunction');
});

test('get enhanced type of function with extra info', () => {
    let myFunc = function() {};
    expect(enhancedTypeOf(myFunc, true)).toBe('function reference to: myFunc');
});

test('get enhanced type of generatorfunction with extra info', () => {
    let theGenerator = function*() {};  
    expect(enhancedTypeOf( theGenerator, true )).toBe('GeneratorFunction reference to: theGenerator');
});

test('get enhanced type of asyncfunction with extra info', () => {
    let myAsyncFunction = async function() {};
    expect(enhancedTypeOf( myAsyncFunction, true )).toBe('AsyncFunction reference to: myAsyncFunction');
});


// ------- objects and user-defined types -------

test('get enhanced type of object', () => {
    expect(enhancedTypeOf({})).toBe('object');
});

test('get enhanced type  of user-defined object instance', () => {
    let myObj = {
        name: 'John',
        age: 30,
    }
    let myObjCopy = { ... myObj };
    expect(enhancedTypeOf(myObjCopy)).toBe('object');
});

test('get enhanced type  of user-defined class instance', () => {
  class MyClass {
    constructor() {
      this.name = 'John';
      this.age = 30;
    }
  }
  let myClassInstance = new MyClass();
  expect(enhancedTypeOf(myClassInstance)).toBe('MyClass');
});

test('get enhanced type  of user-defined class instance with no user constructor', () => {
    class MyOtherClass {}
    let myClassInstance = new MyOtherClass();
    expect(enhancedTypeOf(myClassInstance)).toBe('MyOtherClass');
  });
  




