// Typescript entry point that imports from ts and tsx files

import { init } from 'bazel_typescript_closure_sample/src/init';
import { foo } from 'bazel_typescript_closure_sample/src/lib';

function onReady(cb: () => void) {
  if (document.readyState === "complete"
       || document.readyState === "interactive") {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
}

const testGetter = () => {
  return foo(null);
}

onReady(() => {
  console.log("Hello world!");
  console.log(testGetter);
  init();
});