// Example of an ES6 module with some typing
class Test {
  foo(): string {
    return "foo";
  }
}

export function foo(t: Test | null): Test {
  if (t) return t;
  return new Test();
}