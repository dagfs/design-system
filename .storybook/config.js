import { configure } from "@storybook/react";
import { setAddon, addDecorator } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
setAddon(JSXAddon);

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
