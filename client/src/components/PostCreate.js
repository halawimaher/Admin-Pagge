import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostCreate = (props) => {
  return (
    <Create title="Create a new experience" {...props}>
      <SimpleForm>
        <TextInput source="companyName" />
        <DateInput label="From" source="from" />
        <DateInput label="TO" source="to" />
        <TextInput multiline source="description" />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
