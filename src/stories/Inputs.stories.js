import { Input } from "components";
export default {
  title: "satincake_s_application1/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
