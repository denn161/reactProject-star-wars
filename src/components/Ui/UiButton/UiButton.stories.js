import UiButton from "./UiButton";

export default {
    title: 'Ui-Kit/UiButton',
    component:UiButton 
}


const Template = (args) => <UiButton {...args} />;

const props = {
    text:"Hello",
    onClick:()=>console.log("Hello"),
    disabled:false,
    theme:"ligth",
    classes:''
} 

export const Ligth = Template.bind({});

Ligth.args = {
    ...props,
    theme:"ligth"
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark',
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true, 
};