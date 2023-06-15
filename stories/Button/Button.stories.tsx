import React from "react";
import { ComponentStory } from "@storybook/react";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button {...args}>{children}</Button>
    </div>
  );
};

export const Component = Template.bind({});
Component.storyName = "Button";
Component.args = {
  variant: "success",
  size: "S",
  type: "button",
  borderRadius: "m",
  children: "Click me",
};
