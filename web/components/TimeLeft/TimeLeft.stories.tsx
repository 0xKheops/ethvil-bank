import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TimeLeft } from "./TimeLeft";
import { addMinutes } from "date-fns";
import { addDays, addHours, addWeeks } from "date-fns/esm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "EvilBank/TimeLeft",
  component: TimeLeft,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TimeLeft>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TimeLeft> = (args) => (
  <TimeLeft {...args} />
);

export const Finished = Template.bind({});
Finished.args = { target: new Date() };

export const Minute = Template.bind({});
Minute.args = {
  target: addMinutes(new Date(), 2),
};

export const Hour = Template.bind({});
Hour.args = {
  target: addMinutes(addHours(new Date(), 1), 20),
};

export const Day = Template.bind({});
Day.args = {
  target: addDays(new Date(), 1),
};

export const Week = Template.bind({});
Week.args = {
  target: addWeeks(new Date(), 1),
};
