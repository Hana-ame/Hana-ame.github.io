# 问题

after run `npm i`

## Property 'html' does not exist on type 'JSX.IntrinsicElements'.ts(2339)

reason

the raw html tags are not recognized by the type checker.

solution

```sh
npm install @types/react
```
