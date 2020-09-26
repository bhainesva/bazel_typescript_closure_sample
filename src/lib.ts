class Test {
  foo(): string {
    return "foo";
  }
}

export function foo(t: Test | null): Test {
  if (t) return t;
  return new Test();
}

foo(null);