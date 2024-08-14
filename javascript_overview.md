# Javascript Overview
## Javascript is an Intepreted Language (That is reads line by line).
### Each browser has its own built in JS engine
e.g:
- v8 for Chrome and NodeJS
- Spidermonkey for Firefox
- JScore for Safari
## It is built of ECMA standards


## Types
- Javascript has dynamic typing
- Primitive types (no methods, immutable)
    - undefined
    - null
    - boolean
    - number
    - string
    - symbol
- Objects

## Typecasting? Coercion is the act  of changing one type to a different type:
-  Explicit:
```
const x = 42;
const explicit = String(x);
```

## DOuble vs tripple equals (== vs. ===)
- == coerces the types
- === requires that the types match

## falsy values
- undefined
- null
- false
- +0, -0, NaN
- ""

## truthy values
- {}
- []
- Everything else.

### Everything else aside primitive types is an object

## Primitive vs Objects
- primitives are immutable
- objects are mutable and stored by reference

- passing by reference vs. passing by value. 