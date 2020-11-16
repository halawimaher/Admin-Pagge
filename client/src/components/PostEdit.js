import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
  return (
    <Edit title="Edit an experience" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="companyName" />
        <DateInput label="From" source="from" />
        <DateInput label="TO" source="to" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
