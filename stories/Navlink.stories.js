import { createNavlink } from "./Navlink";

export default {
    title: 'Component/Navlink',
};

const Template = ({ label, ...args }) => {
    return createNavlink({ label, ...args })
};

export const NavbarLink = Template.bind({});
NavbarLink.args = {
    inNavbar: true,
    label: 'navbar link'
};

export const NonNavbarLink = Template.bind({});
NonNavbarLink.args = {
    inNavbar: false,
    label: 'non-navbar link'
};