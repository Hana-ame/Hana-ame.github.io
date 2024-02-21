# 问题

### You are using Node.js 18.14.0. For Next.js, Node.js version >= v18.17.0 is required.

the version of node is too old.

this can be solved by npx?

https://stackoverflow.com/questions/8191459/how-do-i-update-node-js

follow the link above and install nvm

~~**NOTE: this can be find only in git-bash, dunno reason**~~
should restart vscode






## after run `npm i`

### Property 'html' does not exist on type 'JSX.IntrinsicElements'.ts(2339)

reason

the raw html tags are not recognized by the type checker.

solution

```sh
npm install @types/react
```
