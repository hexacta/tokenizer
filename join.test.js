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
test(macro, 'one "two three" four');
test(macro, '"one two" three');
test(macro, "one\ntwo");
test(macro, "Watch: http://t.co/foo");
test(macro, "one… two");
test(macro, "We're going");
