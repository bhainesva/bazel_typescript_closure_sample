import { foo } from './lib';

const testGetter = () => {
  return foo(null);
}

console.log("hullo");
console.log(testGetter);