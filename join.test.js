import test from "ava";
import tokenizer from "./tokenizer";

function macro(t, input) {
  const tokens = tokenizer.tokenize(input);
  const text = tokenizer.join(tokens);
  t.is(text, input);
}
macro.title = (title, input) => `"${input}"`;

test(macro, "");
test(macro, "one two");
test(macro, "one two.");
test(macro, "one (two)");
test(macro, "2.3 million");
test(macro, "02:30 am");
test(macro, "soon...");
test.skip(macro, "soon ...");
