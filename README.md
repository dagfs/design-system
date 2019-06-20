#

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

## TODO

- [ ] Stjele komponenter fra http://storybook.bekk.no/?path=/story/components-multiselect--multiselect

- [ ] Få satt opp knobs og JSX slik at en ser koden bak.
- [ ] Lage oppgave for å lage checkbox - med velg alle funksjon?
- [ ] Lage oppgave for å lage radiobutton - med vis / skjule ekstra felt? - gir ikke mening.

Vil at de skal lage noe som kan gjenbrukes. holder vel med style checkbokses og radio buttons bare for å få erfaring med å få inn noe nytt
