import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CurrencyInput } from "./CurrencyInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "EvilBank/CurrencyInput",
  component: CurrencyInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { onChange: { action: "change" } },
} as ComponentMeta<typeof CurrencyInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CurrencyInput> = (args) => (
  <CurrencyInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const ETH = Template.bind({});
ETH.args = {
  symbol: "ETH",
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
};
