import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ActionButton } from "./ActionButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "EvilBank/Button/ActionButton",
  component: ActionButton,
  argTypes: { onClick: { action: "clicked" } },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ActionButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <>Deposit</>,
};

export const Color = Template.bind({});
Color.args = {
  color: "green",
  children: <>Deposit</>,
};

export const Compact = Template.bind({});
Compact.args = {
  color: "green",
  compact: true,
  children: <>Deposit</>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "green",
  compact: true,
  children: <>Deposit</>,
  disabled: true,
};

export const Working = Template.bind({});
Working.args = {
  color: "yellow",
  compact: true,
  children: <>Deposit</>,
  working: true,
};
