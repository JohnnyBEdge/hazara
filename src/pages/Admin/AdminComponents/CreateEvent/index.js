import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';

const CreateEvent = (props) => {
    return (
        <Create title='Create an Event' {...props}>
            <SimpleForm>
                <TextInput source='title' />
                <TextInput source='body' multiline />
                <DateInput label='Date' source='date' />
            </SimpleForm>
        </Create>
    )
}

export default CreateEvent