# Leetcode in Typescript

## Execute a specific ts file
```sh
# Run ts-node
./node_modules/.bin/ts-node ./src/1/app.ts

# Watch mode, run nodemon
./node_modules/.bin/nodemon --watch 'src/**/*.ts' --exec 'ts-node' ./src/1/app.ts
```

## Lint
```sh
# Run eslint
npm run lint
```

Refs:

- [alloy](https://github.com/AlloyTeam/eslint-config-alloy#typescript)

## Build
```sh
# Run tsc
npm run build
```

## Unit test
```sh
# Run mocha
npm test
```