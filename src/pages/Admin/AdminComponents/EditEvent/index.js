import React from 'react';
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin';

const EditEvent = (props) => {
    return (
        <Edit title='Edit Event' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='title' />
                <TextInput source='body' multiline />
                <DateInput label='Date' source='date' />
            </SimpleForm>
        </Edit>
    )
}

export default EditEvent