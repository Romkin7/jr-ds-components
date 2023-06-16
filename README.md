# jr-ds-components

JR React component library

## Developing components

Create new Folder with components name inside of stories folder, add 3 files into that folder:

1. Example.tsx
2. Example.module.scss
3. Example.stories.tsx

run npm start script, in order to launch storybook:

`npm start`

## Building components package

Include your new components in index.ts file inside of stories folder:

**index.ts**

```ts
export { default as Button } from "./Button/Button";
/** New component added in alphabetical order. */
export { default as Example } from "./Example/Example";
```

Run one of following version upgrade commands:

for Major release:
`npm version --no-git-tag-version major`
for Minor release:
`npm version --no-git-tag-version minor`
for Patch release:
`npm version --no-git-tag-version patch`

Run build npm sript in order to build components package:

`npm run build`

## Publishing package to npm

Run npm login to login into your account.

`npm login`

Once you have successfully looged in, run publish script.

`npm run publish:components`

## Maintenance & Support

devdesign@devdesign.fi

joseph@cododev.ca
