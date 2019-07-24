#

## Oppsett

1. Klon prosjektet
2. `npm install`
3. `npm run dev`
4. `npm run storybook`

## Hvordan sette opp storybook med react

`npx create-react-app .` - https://facebook.github.io/create-react-app/docs/getting-started

`npx -p @storybook/cli sb init --type react` - https://storybook.js.org/docs/guides/guide-react/

`npm install --save styled-components` - https://www.styled-components.com/docs/basics#installation

react starter ikke pga dependencies

To fix the dependency tree, try following the steps below in the exact order:

1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
2. Delete node_modules in your project folder.
3. Remove "babel-loader" from dependencies and/or devDependencies in the package.json file in your project folder.
4. Run npm install or yarn, depending on the package manager you use.
