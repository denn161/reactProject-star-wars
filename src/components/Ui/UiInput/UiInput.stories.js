import { useState } from "react";
import UiInput from "./UiInput";

export default {
    title: 'Ui-Kit/UiInput',
    component:UiInput
}


const Template = (args) => {

    const [value, setValue] = useState('');

    const handleInputChange = (value) => {

        setValue(value);
    }

    return (
        <UiInput
            {...args}
            value={value}
            handleInputChange={handleInputChange}
        
        />      


    )
}

const props = {

    type:"text",
    value:"",
    handleInputChange:()=>console.log('Input Component'),
    placeholder:"Input value",
    classes:""
}

export const Default = Template.bind({});


Default.args = {
    ...props
};

