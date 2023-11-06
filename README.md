Reproduces a bug with p-pipe 5.0.0
https://github.com/sindresorhus/p-limit/issues/72

Test environment:
* Ubuntu 22.04.3 LTS
* node 18.18.2
* yarn 1.22.19

Run:
1. `yarn install`
2. `yarn test`

Output:

```shell
yarn run v1.22.19
$ jest ./src
 FAIL  src/index.test.ts
  ● Test suite failed to run

    ENOENT: no such file or directory, open 'async_hooks'

       9 |
      10 |     return await Promise.all(promises);
    > 11 | }
         |  ^
      12 |
      13 | async function bar(num: number): Promise<number> {
      14 |     return num + 1;
```
