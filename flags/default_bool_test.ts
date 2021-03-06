// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import { test } from "../testing/mod.ts";
import { assertEquals } from "../testing/asserts.ts";
import { parse } from "./mod.ts";

test(function booleanDefaultTrue() {
  const argv = parse([], {
    boolean: "sometrue",
    default: { sometrue: true }
  });
  assertEquals(argv.sometrue, true);
});

test(function booleanDefaultFalse() {
  const argv = parse([], {
    boolean: "somefalse",
    default: { somefalse: false }
  });
  assertEquals(argv.somefalse, false);
});

test(function booleanDefaultNull() {
  const argv = parse([], {
    boolean: "maybe",
    default: { maybe: null }
  });
  assertEquals(argv.maybe, null);
  const argv2 = parse(["--maybe"], {
    boolean: "maybe",
    default: { maybe: null }
  });
  assertEquals(argv2.maybe, true);
});
