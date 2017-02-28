import test from "ava";
import tokenizer from "./tokenizer";

function macro(t, input, expected) {
  t.deepEqual(tokenizer.tokenize(input), expected);
}
macro.title = (title, input) => `"${input}"`;

test(macro, "one two", ["one", "two"]);
test(macro, "one  two", ["one", "two"]);
test(macro, "one two   ", ["one", "two"]);
test(macro, "   one     two     ", ["one", "two"]);
test(macro, "One tWo", ["One", "tWo"]);
test(macro, "don't you", ["don't", "you"]);
test(macro, "one-two", ["one-two"]);
test(macro, "see https://t.co/Ao47NBwbOB", ["see", "https://t.co/Ao47NBwbOB"]);
test(macro, "hey :)", ["hey", ":)"]);
test(macro, "hey 😅", ["hey", "😅"]);
test(macro, "@men_tion @some2", ["@men_tion", "@some2"]);
test(macro, "¿cuántos años?", ["¿", "cuántos", "años", "?"]);
test(macro, "v8 compiler", ["v8", "compiler"]);
test(macro, "$12 billion", ["$12", "billion"]);
test(macro, "u.s.a.", ["u.s.a."]);
test(macro, "soon...", ["soon", ".", ".", "."]);
test(macro, "one. two", ["one", ".", "two"]);
test(macro, "one two.", ["one", "two", "."]);
test(macro, "one (two)", ["one", "(", "two", ")"]);
test(macro, '"one two" three', ['"', "one", "two", '"', "three"]);
test(macro, "one & two", ["one", "&", "two"]);
test(macro, "one: two", ["one", ":", "two"]);
test(macro, "one.two", ["one", ".", "two"]);
test(macro, "one… two", ["one", "…", "two"]);
test(macro, "barça", ["barça"]);
test(macro, "Verão", ["Verão"]);
test(macro, "déjà vu", ["déjà", "vu"]);
test(macro, "We’re going", ["We’re", "going"]);
