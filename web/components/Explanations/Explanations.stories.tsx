import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Explanations } from "./Explanations";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "EvilBank/Explanations",
  component: Explanations,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // decorators:[
  //   (story: any) => <div className="">{story()}</div>,
  // ]
} as ComponentMeta<typeof Explanations>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Explanations> = (args) => (
  <Explanations {...args} />
);

export const Default = Template.bind({});
Default.args = {};
