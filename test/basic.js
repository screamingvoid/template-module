const test = require("brittle")
const { multiply } = require("..")

test("Multiplication", async (t) => {
  t.plan(1)
  t.is(multiply(2, 3), 6)
})
