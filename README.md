# Monotonous

Kev's TypeScript monorepo.

## Development

- Clone this repo.

- Install dependencies:

    ```powershell
    npm install
    ```

- Because dependent projects make use of `.d.ts` files that are built from their
  dependencies, you’ll have to build after cloning before you can navigate the
  repo in an editor without seeing spurious errors.

    ```powershell
    npm run build
    ```

## TODO

- Setup TS [config file inheritance](https://www.typescriptlang.org/docs/handbook/project-references.html)
- Setup unit test projects.
- Setup ESLint.
- Setup typescript-eslint
- Add [import/no-extraneous-dependencies](https://www.npmjs.com/package/eslint-plugin-import)

## References

[npm monorepos](<https://earthly.dev/blog/setup-typescript-monorepo/>)

[npm monorepos](https://plainenglish.io/blog/monorepo-setup-with-npm-and-typescript)

[TS project references](https://www.typescriptlang.org/docs/handbook/project-references.html)

[Configuring typescript-eslint in a monorepo](https://typescript-eslint.io/linting/typed-linting/monorepos/)
