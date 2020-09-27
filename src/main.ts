import { init } from './init';
import { foo } from './lib';

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
  console.log("hullo");
  console.log(testGetter);
  init();
});