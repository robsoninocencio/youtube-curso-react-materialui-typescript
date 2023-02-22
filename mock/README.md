# Como usar

1. Abra uma nova aba no terminal<BR />
2. Execute o seguinte comando: <BR />
   ```yarn run json-server -w -p 3333 ./mock/database.json```<BR />
   ou<BR />
   ```npm run json-server -w -p 3333 ./mock/database.json```<BR />
3. Ou configure o package.json<BR />
```
  "scripts": {
    "mock": "json-server -w -p 3333 ./mock/database.json",
  },
```
<BR />
Então execute:

```
yarn mock
```