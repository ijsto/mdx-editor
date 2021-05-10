# Slate <> Rollup <> esrever (Reverse) Build problem

> This is related to `namedExports`

To reproduce:

1. `yarn install`
2. `yarn prepare`


It looks like rollup works if `npm i` is run instead of `yarn add`. `.
Additionally, it appears that `npm i` is needed before each `rollup`.