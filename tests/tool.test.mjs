import assert from "node:assert/strict";
import { test } from "node:test";
import { calculate as units } from "../tool.mjs";

test("capacity calculations do not silently round large or fractional quantities", () => {
  assert.match(units("9007199254740993", { unit: "B" }).text, /^9007199254740993 B\n/);
  assert.match(units("1.5", { unit: "KiB" }).text, /^1536 B\n/);
  assert.match(units("0.1", { unit: "B" }).text, /^0\.1 B\n/);
  for (const s of ["", "NaN", "1e9", "-4", "1.0000000000001"])
    assert.equal(units(s, {}).error, true);
});