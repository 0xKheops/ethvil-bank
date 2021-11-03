import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Section } from "../Section/Section";
import { SectionContent } from "../Section/SectionContent";
import { SectionTitle } from "./SectionTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "EvilBank/Section",
  component: Section,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // decorators:[
  //   (story: any) => <div className="">{story()}</div>,
  // ]
} as ComponentMeta<typeof Section>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args}>
    <SectionTitle large>Section</SectionTitle>
    <SectionContent>1st content</SectionContent>
    <SectionTitle>sub section</SectionTitle>
    <SectionContent>content wrapped in a SectionContent block</SectionContent>
    <SectionTitle>another sub section</SectionTitle>
    content unwrapped
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
