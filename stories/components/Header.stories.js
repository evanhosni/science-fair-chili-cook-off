import { createHeader } from "./Header";

export default {};

const Template = (args) => createHeader(args);

export const HeaderH1 = Template.bind({});
HeaderH1.args = {
    text: 'h1',
    primary: true,
};

export const HeaderH2 = Template.bind({});
HeaderH2.args = {
    text: 'h2',
    primary: false,
};