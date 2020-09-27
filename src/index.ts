import { init } from 'bazel_typescript_closure_sample/src/init';
import { foo } from 'bazel_typescript_closure_sample/src/lib';

const testGetter = () => {
  return foo(null);
}

function OnReady(cb: () => void) {
  if (document.readyState === "complete"
       || document.readyState === "interactive") {
    cb();
  } else {
    document.addEventListener('DOMContentLoaded', cb);
  }
}

OnReady(() => {
  console.log("hello world");
  console.log(testGetter);
  init();
});