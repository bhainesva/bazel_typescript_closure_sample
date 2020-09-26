import { foo } from './lib.js';

const testGetter = () => {
  return foo(null);
}

console.log(testGetter);