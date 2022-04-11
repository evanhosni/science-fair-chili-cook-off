import { createNavlink } from "./Navlink";

export default {};

const Template = (args) => createNavlink(args);

export const NavlinkNavbar = Template.bind({});
NavlinkNavbar.args = {
    inNavbar: true,
    label: 'Navlink for Navbar'
};

export const NavlinkFooter = Template.bind({});
NavlinkFooter.args = {
    inNavbar: false,
    label: 'Navlink for Footer'
};