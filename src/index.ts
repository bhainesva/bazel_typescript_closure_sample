// Typescript entry point that imports from ts and tsx files

// For some reason my editor complains about these imports, although the import in
// init.tsx work fine.
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