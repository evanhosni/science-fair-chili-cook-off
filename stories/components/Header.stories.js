import { createHeader } from "./Header";

export default {};

const Template = (args) => createHeader(args);

export const HeaderH1 = Template.bind({});
NavlinkNavbar.args = {
    text: 'h1',
    primary: true,
};

export const HeaderH2 = Template.bind({});
NavlinkFooter.args = {
    text: 'h2',
    primary: false,
};