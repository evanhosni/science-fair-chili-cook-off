import { createPage } from "./Page";

export default {
    title: 'Page',
};

const Template = (args) => createPage(args);

export const Page = Template.bind({});
Page.args = {};